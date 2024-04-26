import {
	type Article,
	type ArticleCreateSeed,
	type ArticleCreateSeedData,
	type ArticleData,
	type ArticleEditSeed,
	type ArticleEditSeedData,
	type ArticleListQuery,
	type ArticleListQueryData,
	parseArticleId
} from '@/features/article/model/type'
import { parseUserId } from '@/features/user/model/type'

export const convertArticleListQueryToData = (
	query?: Partial<ArticleListQuery>
): ArticleListQueryData => {
	return {
		resolved: query?.resolved
	}
}

export const convertArticleFromData = (data: ArticleData): Article => {
	return {
		...data,
		id: parseArticleId(data.id),
		createdBy: parseUserId(data.createdBy),
		createdAt: new Date(data.createdAt),
		updatedAt: new Date(data.updatedAt)
	}
}

export const convertArticleCreateSeedToData = (
	seed: ArticleCreateSeed
): ArticleCreateSeedData => {
	return {
		title: seed.title,
		description: seed.description,
		content: seed.content,
		createdBy: seed.createdBy
	}
}

export const convertArticleEditSeedToData = (
	seed: ArticleEditSeed
): ArticleEditSeedData => {
	return {
		title: seed.title,
		description: seed.description,
		content: seed.content
	}
}
