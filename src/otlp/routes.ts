import { Hono } from 'hono'

import { createOtlpExportHandler, type OtlpSink } from './handler.js'

export function createOtlpRouter(sink?: OtlpSink) {
  const otlp = new Hono()

  otlp.post('/v1/traces', createOtlpExportHandler('traces', sink))
  otlp.post('/v1/metrics', createOtlpExportHandler('metrics', sink))
  otlp.post('/v1/logs', createOtlpExportHandler('logs', sink))

  return otlp
}
