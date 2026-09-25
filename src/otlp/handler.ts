import type { Context } from 'hono'

import { readOtlpBody } from './body.js'
import {
  contentTypeFor,
  decodeExportRequest,
  encodeSuccessResponse,
  OtlpProtocolError,
  resolveEncoding,
  type DecodedExport,
  type OtlpSignal,
} from './codec.js'

export interface OtlpSink {
  accept(decoded: DecodedExport): void | Promise<void>
}

/** Protocol-only sink: accepts valid OTLP payloads and discards them. */
export const noopSink: OtlpSink = {
  accept() {},
}

export function createOtlpExportHandler(signal: OtlpSignal, sink: OtlpSink = noopSink) {
  return async (c: Context) => {
    try {
      const encoding = resolveEncoding(c.req.header('content-type'))
      const bytes = await readOtlpBody(c.req.raw)
      const decoded = decodeExportRequest(signal, encoding, bytes)
      await sink.accept(decoded)

      const responseBody = encodeSuccessResponse(signal, encoding)
      return new Response(responseBody, {
        status: 200,
        headers: {
          'Content-Type': contentTypeFor(encoding),
        },
      })
    } catch (err) {
      if (err instanceof OtlpProtocolError) {
        // OTLP/HTTP Bad Data: 400; unsupported media/encoding: 415.
        // Body is plain text for human debugging; clients must not retry 400.
        return c.text(err.message, err.status)
      }
      throw err
    }
  }
}
