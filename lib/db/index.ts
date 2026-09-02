import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

const globalForDb = globalThis as unknown as {
  xmPool?: Pool
  xmDb?: ReturnType<typeof drizzle>
}

export function hasDatabaseUrl() {
  return Boolean(process.env.DATABASE_URL)
}

export function getDb() {
  if (!process.env.DATABASE_URL) return null
  if (globalForDb.xmDb) return globalForDb.xmDb

  const pool =
    globalForDb.xmPool ?? new Pool({ connectionString: process.env.DATABASE_URL })
  if (process.env.NODE_ENV !== 'production') globalForDb.xmPool = pool

  const instance = drizzle(pool, { schema })
  globalForDb.xmDb = instance
  return instance
}
