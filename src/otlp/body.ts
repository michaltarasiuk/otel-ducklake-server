import { gunzipSync } from 'node:zlib'

import { env } from '../env.js'
import { OtlpProtocolError } from './codec.js'

export function maxBodyBytes() {
  return env().OTLP_MAX_BODY_BYTES
}

export async function readOtlpBody(request: Request, limit = maxBodyBytes()) {
  const buffer = new Uint8Array(await request.arrayBuffer())
  if (buffer.byteLength > limit) {
    throw new OtlpProtocolError(413, `Request body exceeds limit of ${limit} bytes`)
  }

  const encoding = request.headers.get('content-encoding')?.toLowerCase()
  if (!encoding || encoding === 'identity') {
    return buffer
  }

  if (encoding === 'gzip') {
    try {
      const decoded = gunzipSync(buffer)
      if (decoded.byteLength > limit) {
        throw new OtlpProtocolError(
          413,
          `Decompressed request body exceeds limit of ${limit} bytes`,
        )
      }
      return decoded
    } catch (err) {
      if (err instanceof OtlpProtocolError) {
        throw err
      }
      throw new OtlpProtocolError(400, 'Failed to gunzip request body')
    }
  }

  throw new OtlpProtocolError(
    415,
    `Unsupported Content-Encoding: ${encoding}. Expected gzip or identity`,
  )
}
