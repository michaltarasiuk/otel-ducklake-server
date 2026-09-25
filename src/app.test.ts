import { gzipSync } from 'node:zlib'

import { afterEach, describe, expect, test } from 'vitest'

import logsFixture from '../fixtures/otlp/logs.json' with { type: 'json' }
import metricsFixture from '../fixtures/otlp/metrics.json' with { type: 'json' }
import traceFixture from '../fixtures/otlp/trace.json' with { type: 'json' }
import app from './app.js'
import { opentelemetry } from './otlp/generated/root.js'

const TraceReq = opentelemetry.proto.collector.trace.v1.ExportTraceServiceRequest
const MetricsReq = opentelemetry.proto.collector.metrics.v1.ExportMetricsServiceRequest
const LogsReq = opentelemetry.proto.collector.logs.v1.ExportLogsServiceRequest

afterEach(() => {
  delete process.env.OTLP_MAX_BODY_BYTES
})

describe('health', () => {
  test('GET /health', async () => {
    const res = await app.request('/health')
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({ status: 'ok' })
  })
})

describe('OTLP/HTTP', () => {
  test('POST /v1/traces accepts JSON', async () => {
    const res = await app.request('/v1/traces', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(traceFixture),
    })
    expect(res.status).toBe(200)
    expect(res.headers.get('Content-Type')).toMatch(/^application\/json/)
    expect(await res.json()).toEqual({})
  })

  test('POST /v1/traces accepts empty JSON object', async () => {
    const res = await app.request('/v1/traces', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '{}',
    })
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({})
  })

  test('POST /v1/traces accepts protobuf', async () => {
    const body = TraceReq.encode(TraceReq.fromObject(traceFixture)).finish()

    const res = await app.request('/v1/traces', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-protobuf' },
      body,
    })
    expect(res.status).toBe(200)
    expect(res.headers.get('Content-Type')).toBe('application/x-protobuf')
    expect(Buffer.from(await res.arrayBuffer()).byteLength).toBe(0)
  })

  test('POST /v1/metrics accepts protobuf', async () => {
    const body = MetricsReq.encode(MetricsReq.fromObject(metricsFixture)).finish()

    const res = await app.request('/v1/metrics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-protobuf' },
      body,
    })
    expect(res.status).toBe(200)
    expect(res.headers.get('Content-Type')).toBe('application/x-protobuf')
    expect(Buffer.from(await res.arrayBuffer()).byteLength).toBe(0)
  })

  test('POST /v1/logs accepts protobuf', async () => {
    const body = LogsReq.encode(LogsReq.fromObject(logsFixture)).finish()

    const res = await app.request('/v1/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-protobuf' },
      body,
    })
    expect(res.status).toBe(200)
    expect(res.headers.get('Content-Type')).toBe('application/x-protobuf')
    expect(Buffer.from(await res.arrayBuffer()).byteLength).toBe(0)
  })

  test('POST /v1/traces accepts gzip JSON', async () => {
    const res = await app.request('/v1/traces', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'gzip',
      },
      body: gzipSync(JSON.stringify(traceFixture)),
    })
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({})
  })

  test('POST /v1/traces rejects unsupported Content-Type', async () => {
    const res = await app.request('/v1/traces', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: 'nope',
    })
    expect(res.status).toBe(415)
  })

  test('POST /v1/traces rejects unsupported Content-Encoding', async () => {
    const res = await app.request('/v1/traces', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'br',
      },
      body: '{}',
    })
    expect(res.status).toBe(415)
  })

  test('POST /v1/traces rejects non-object JSON', async () => {
    const res = await app.request('/v1/traces', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: '[1]',
    })
    expect(res.status).toBe(400)
  })

  test('POST /v1/traces rejects invalid protobuf', async () => {
    const res = await app.request('/v1/traces', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-protobuf' },
      body: Uint8Array.from([0xff, 0x00, 0x01, 0x02]),
    })
    expect(res.status).toBe(400)
  })

  test('POST /v1/traces rejects oversized body', async () => {
    process.env.OTLP_MAX_BODY_BYTES = '8'

    const res = await app.request('/v1/traces', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(traceFixture),
    })
    expect(res.status).toBe(413)
  })

  test('POST /v1/metrics accepts JSON', async () => {
    const res = await app.request('/v1/metrics', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(metricsFixture),
    })
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({})
  })

  test('POST /v1/logs accepts JSON', async () => {
    const res = await app.request('/v1/logs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logsFixture),
    })
    expect(res.status).toBe(200)
    expect(await res.json()).toEqual({})
  })
})
