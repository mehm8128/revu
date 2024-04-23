import { getApiOrigin } from '@/lib/env'
import { fetcher } from '@/lib/fetcher'
import { Article, ArticleCreateSeed, ArticleData } from '../model/type'
import {
	convertArticleCreateSeedToData,
	convertArticleFromData
} from './converter'

// TODO: mutate
export const postArticle = async (
	seed: ArticleCreateSeed
): Promise<Article> => {
	const seedData = convertArticleCreateSeedToData(seed)
	const res: ArticleData = await fetcher(`${getApiOrigin()}/articles`, {
		method: 'POST',
		body: JSON.stringify(seedData)
	})

	return convertArticleFromData(res)
}
