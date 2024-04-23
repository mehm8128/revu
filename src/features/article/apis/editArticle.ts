import { getApiOrigin } from '@/lib/env'
import { fetcher } from '@/lib/fetcher'
import type {
	Article,
	ArticleData,
	ArticleEditSeed,
	ArticleId
} from '../model/type'
import {
	convertArticleEditSeedToData,
	convertArticleFromData
} from './converter'

// TODO: mutate
export const editArticle = async (
	id: ArticleId,
	seed: ArticleEditSeed
): Promise<Article> => {
	const seedData = convertArticleEditSeedToData(seed)
	const res: ArticleData = await fetcher(`${getApiOrigin()}/articles/${id}`, {
		method: 'PATCH',
		body: JSON.stringify(seedData)
	})

	return convertArticleFromData(res)
}
