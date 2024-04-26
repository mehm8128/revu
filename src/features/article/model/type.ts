import {
	type Output,
	boolean,
	brand,
	date,
	minLength,
	object,
	optional,
	safeParse,
	string
} from 'valibot'

export const articleId = brand(string(), 'articleId')
export type ArticleId = Output<typeof articleId>
export const parseArticleId = (id: string) => {
	const result = safeParse(articleId, id)
	if (!result.success) {
		throw new Error('invalid id')
	}
	return result.output
}

export const articleSchema = object({
	id: articleId,
	title: string(),
	description: string(),
	content: string(),
	createdAt: date(),
	updatedAt: date()
})
export type Article = Output<typeof articleSchema>
export type ArticleList = Article[]

export const articleListQuerySchema = object({
	resolved: boolean()
})
export type ArticleListQuery = Output<typeof articleListQuerySchema>

export const articleCreateSeedSchema = object({
	title: string([minLength(1)]),
	description: string(),
	content: string([minLength(1)])
})
export type ArticleCreateSeed = Output<typeof articleCreateSeedSchema>

export const articleEditSeedSchema = object({
	title: string([minLength(1)]),
	description: string(),
	content: string([minLength(1)])
})
export type ArticleEditSeed = Output<typeof articleEditSeedSchema>

export const articleDataSchema = object({
	id: string(),
	title: string(),
	description: string(),
	content: string(),
	createdAt: string(),
	updatedAt: string()
})
export type ArticleData = Output<typeof articleDataSchema>
export type ArticleListData = ArticleData[]

export const articleCreateSeedDataSchema = object({
	title: string(),
	description: string(),
	content: string()
})
export type ArticleCreateSeedData = Output<typeof articleCreateSeedDataSchema>

export const articleEditSeedDataSchema = object({
	title: string(),
	description: string(),
	content: string()
})
export type ArticleEditSeedData = Output<typeof articleEditSeedDataSchema>

export const articleListQueryDataSchema = object({
	resolved: optional(boolean())
})
export type ArticleListQueryData = Output<typeof articleListQueryDataSchema>
