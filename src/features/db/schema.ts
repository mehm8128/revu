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
	title: varchar('title', { length: 64 }).notNull(),
	description: varchar('description', { length: 128 }).notNull(),
	content: text('content').notNull(),
	createdBy: char('created_by', { length: 32 })
		.references(() => users.id)
		.notNull(),
	createdAt: timestamp('created_at').notNull(),
	updatedAt: timestamp('updated_at').notNull()
})

export const reviews = pgTable('reviews', {
	id: char('id', { length: 32 }).primaryKey(),
	articleId: char('article_id', { length: 32 })
		.references(() => articles.id)
		.notNull(),
	line: integer('line').notNull(),
	comment: text('comment').notNull(),
	createdBy: char('created_by', { length: 32 })
		.references(() => users.id)
		.notNull(),
	createdAt: timestamp('created_at').notNull(),
	updatedAt: timestamp('updated_at').notNull()
})

export const users = pgTable('users', {
	id: char('id', { length: 32 }).primaryKey(),
	name: varchar('name', { length: 32 }).notNull(),
	photo: varchar('photo', { length: 128 }).notNull()
})
