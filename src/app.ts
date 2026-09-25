import { Hono } from 'hono'
import { logger } from 'hono/logger'

import { createOtlpRouter } from './otlp/routes.js'
import type { OtlpSink } from './otlp/handler.js'

const sink: OtlpSink = {
  accept(decoded) {
    console.log(`otlp accepted ${decoded.signal} encoding=${decoded.encoding}`)
  },
}

const app = new Hono()

app.use(logger())

app.get('/health', (c) => c.json({ status: 'ok' }))

app.route('/', createOtlpRouter(sink))

app.notFound((c) => c.json({ message: 'Not Found' }, 404))

app.onError((err, c) => {
  console.error(err)
  return c.json({ message: 'Internal Server Error' }, 500)
})

export default app
export type AppType = typeof app
