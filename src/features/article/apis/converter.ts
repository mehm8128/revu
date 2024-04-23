import {
	Article,
	ArticleCreateSeed,
	ArticleCreateSeedData,
	ArticleData,
	ArticleEditSeed,
	ArticleEditSeedData,
	ArticleListQuery,
	ArticleListQueryData,
	parseId
} from '@/features/article/model/type'

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
		id: parseId(data.id),
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
		content: seed.content
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
