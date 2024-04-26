import {
	char,
	integer,
	pgTable,
	text,
	timestamp,
	varchar
} from 'drizzle-orm/pg-core'

export const articles = pgTable('articles', {
	id: char('id', { length: 32 }).primaryKey(),
	title: varchar('title', { length: 64 }),
	description: varchar('description', { length: 128 }),
	content: text('content'),
	createdBy: char('created_by', { length: 32 }).references(() => users.id),
	createdAt: timestamp('created_at'),
	updatedAt: timestamp('updated_at')
})

export const reviews = pgTable('reviews', {
	id: char('id', { length: 32 }).primaryKey(),
	articleId: char('article_id', { length: 32 }).references(() => articles.id),
	line: integer('line'),
	comment: text('comment'),
	createdBy: char('created_by', { length: 32 }).references(() => users.id),
	createdAt: timestamp('created_at'),
	updatedAt: timestamp('updated_at')
})

export const users = pgTable('users', {
	id: char('id', { length: 32 }).primaryKey(),
	name: varchar('name', { length: 32 }),
	photo: varchar('photo', { length: 128 })
})
