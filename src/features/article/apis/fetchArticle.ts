import type {
	Article,
	ArticleData,
	ArticleId
} from '@/features/article/model/type'
import { getApiOrigin } from '@/lib/env'
import { convertArticleFromData } from './converter'

import { fetcher } from '@/lib/fetcher'
import { useSuspenseQuery } from '@tanstack/react-query'

const fetchArticle = async (id: ArticleId): Promise<Article> => {
	const res: ArticleData = await fetcher(`${getApiOrigin()}/articles/${id}`)

	return convertArticleFromData(res)
}

export const useArticle = (id: ArticleId) => {
	return useSuspenseQuery({
		queryKey: ['/articles', id],
		queryFn: () => fetchArticle(id)
	})
}
