import type { Config } from 'drizzle-kit'

const drizzleConfig = {
	schema: './src/features/db/schema.ts',
	out: './src/features/db/migrations',
	driver: 'pg',
	dbCredentials: {
		connectionString: process.env.DATABASE_URL ?? ''
	}
} satisfies Config

export default drizzleConfig
