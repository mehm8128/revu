import {
	type Article,
	type ArticleCreateSeed,
	type ArticleCreateSeedData,
	type ArticleData,
	type ArticleEditSeed,
	type ArticleEditSeedData,
	type ArticleListQuery,
	type ArticleListQueryData,
	articleCreateSeedDataSchema,
	articleSchema
} from '@/features/article/model/type'
import { parse } from 'valibot'

export const convertArticleListQueryToData = (
	query?: Partial<ArticleListQuery>
): ArticleListQueryData => {
	return {
		resolved: query?.resolved
	}
}

export const convertArticleFromData = (data: ArticleData): Article => {
	console.log('data', data)
	return parse(articleSchema, data)
}

export const convertArticleCreateSeedToData = (
	seed: ArticleCreateSeed
): ArticleCreateSeedData => {
	return parse(articleCreateSeedDataSchema, seed)
}

export const convertArticleEditSeedToData = (
	seed: ArticleEditSeed
): ArticleEditSeedData => {
	return seed
}
