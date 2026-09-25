import type * as $protobuf from 'protobufjs'

import { ContentType } from '../headers/content-type.js'
import { isRecord } from '../utils/is-record.js'
import { opentelemetry } from './generated/root.js'

export type OtlpSignal = 'traces' | 'metrics' | 'logs'

export type OtlpEncoding = 'json' | 'protobuf'

export interface DecodedExport {
  signal: OtlpSignal
  encoding: OtlpEncoding
  body: Record<string, unknown>
}

export class OtlpProtocolError extends Error {
  readonly status: 400 | 413 | 415
  readonly retryable = false

  constructor(status: 400 | 413 | 415, message: string) {
    super(message)
    this.name = OtlpProtocolError.name
    this.status = status
  }
}

interface ProtoType {
  decode(reader: Uint8Array): object
  encode(message: object): $protobuf.Writer
  fromObject(object: { [k: string]: unknown }): object
  toObject(message: object, options?: $protobuf.IConversionOptions): { [k: string]: unknown }
}

interface SignalConfig {
  requestType: ProtoType
  responseType: ProtoType
}

const collector = opentelemetry.proto.collector

const SIGNALS: Record<OtlpSignal, SignalConfig> = {
  traces: {
    requestType: collector.trace.v1.ExportTraceServiceRequest,
    responseType: collector.trace.v1.ExportTraceServiceResponse,
  },
  metrics: {
    requestType: collector.metrics.v1.ExportMetricsServiceRequest,
    responseType: collector.metrics.v1.ExportMetricsServiceResponse,
  },
  logs: {
    requestType: collector.logs.v1.ExportLogsServiceRequest,
    responseType: collector.logs.v1.ExportLogsServiceResponse,
  },
}

export function resolveEncoding(contentTypeHeader: string | undefined) {
  if (!contentTypeHeader) {
    throw new OtlpProtocolError(415, 'Missing Content-Type header')
  }

  let mediaType = ContentType.from(contentTypeHeader).mediaType
  if (!mediaType) {
    throw new OtlpProtocolError(415, 'Missing Content-Type media type')
  }

  switch (mediaType.toLowerCase()) {
    case 'application/json':
      return 'json' as const
    case 'application/x-protobuf':
    case 'application/protobuf':
      return 'protobuf' as const
    default:
      throw new OtlpProtocolError(
        415,
        `Unsupported Content-Type: ${mediaType}. ` +
          'Expected application/json or application/x-protobuf',
      )
  }
}

export function contentTypeFor(encoding: OtlpEncoding) {
  return new ContentType({
    mediaType: encoding === 'json' ? 'application/json' : 'application/x-protobuf',
  }).toString()
}

export function decodeExportRequest(signal: OtlpSignal, encoding: OtlpEncoding, bytes: Uint8Array) {
  const config = SIGNALS[signal]

  try {
    let message: object
    if (encoding === 'json') {
      const text = new TextDecoder().decode(bytes)
      const parsed = text.length === 0 ? {} : JSON.parse(text)
      if (!isRecord(parsed)) {
        throw new OtlpProtocolError(400, 'OTLP JSON body must be an object')
      }

      message = config.requestType.fromObject(parsed)
    } else {
      message = config.requestType.decode(bytes)
    }

    const body = config.requestType.toObject(message, {
      defaults: false,
      enums: String,
      longs: String,
      bytes: String,
    })

    return {
      signal,
      encoding,
      body,
    }
  } catch (err) {
    if (err instanceof OtlpProtocolError) {
      throw err
    }
    const message = err instanceof Error ? err.message : 'Invalid OTLP payload'
    throw new OtlpProtocolError(400, message)
  }
}

export function encodeSuccessResponse(signal: OtlpSignal, encoding: OtlpEncoding) {
  const config = SIGNALS[signal]
  switch (encoding) {
    case 'json':
      return new TextEncoder().encode('{}')
    case 'protobuf':
      return config.responseType.encode({}).finish()
    default:
      encoding satisfies never
  }
}
