import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().int().positive().default(4318),
  OTLP_MAX_BODY_BYTES: z.coerce
    .number()
    .int()
    .positive()
    .default(16 * 1024 * 1024),
})

export function env() {
  return envSchema.parse(process.env)
}
