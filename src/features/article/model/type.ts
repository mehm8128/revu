import { articles } from '@/features/db/schema'
import { parseUserId, userId } from '@/features/user/model/type'
import { createInsertSchema, createSelectSchema } from 'drizzle-valibot'
import {
	type Output,
	boolean,
	brand,
	date,
	minLength,
	number,
	object,
	optional,
	pick,
	safeParse,
	string,
	transform
} from 'valibot'

export const articleId = brand(number(), 'articleId')
export type ArticleId = Output<typeof articleId>
export const parseArticleId = (id: number) => {
	const result = safeParse(articleId, id)
	if (!result.success) {
		throw new Error('invalid id')
	}
	return result.output
}

export const articleSchema = transform(
	object({
		id: articleId,
		title: string(),
		description: string(),
		content: string(),
		createdBy: userId,
		createdAt: date(),
		updatedAt: date()
	}),
	({ id, createdBy, createdAt, updatedAt, ...rest }) => ({
		id: parseArticleId(id),
		createdBy: parseUserId(createdBy),
		createdAt: new Date(createdAt),
		updatedAt: new Date(updatedAt),
		...rest
	})
)
export type Article = Output<typeof articleSchema>
export type ArticleList = Article[]

export const articleListQuerySchema = object({
	resolved: boolean()
})
export type ArticleListQuery = Output<typeof articleListQuerySchema>

export const articleCreateSeedSchema = object({
	title: string([minLength(1)]),
	description: string(),
	content: string([minLength(1)]),
	createdBy: userId
})
export type ArticleCreateSeed = Output<typeof articleCreateSeedSchema>

export const articleEditSeedSchema = object({
	title: string([minLength(1)]),
	description: string(),
	content: string([minLength(1)])
})
export type ArticleEditSeed = Output<typeof articleEditSeedSchema>

export const articleDataSchema = createSelectSchema(articles, {
	createdAt: string(),
	updatedAt: string()
})
export type ArticleData = Output<typeof articleDataSchema>
export type ArticleListData = ArticleData[]

export const articleCreateSeedDataSchema = pick(createInsertSchema(articles), [
	'title',
	'description',
	'content',
	'createdBy'
])
export type ArticleCreateSeedData = Output<typeof articleCreateSeedDataSchema>

export const articleEditSeedDataSchema = pick(createInsertSchema(articles), [
	'title',
	'description',
	'content'
])
export type ArticleEditSeedData = Output<typeof articleEditSeedDataSchema>

export const articleListQueryDataSchema = object({
	resolved: optional(boolean())
})
export type ArticleListQueryData = Output<typeof articleListQueryDataSchema>
