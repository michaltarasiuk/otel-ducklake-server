import { serve } from '@hono/node-server'

import app from './app.js'
import { env } from './env.js'

const { PORT } = env()

serve({ fetch: app.fetch, port: PORT }, (info) => {
  console.log(`otel-ducklake-server listening on http://localhost:${info.port}`)
})
