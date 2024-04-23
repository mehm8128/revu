import type {
	ArticleList,
	ArticleListData,
	ArticleListQuery
} from '@/features/article/model/type'
import { getApiOrigin } from '@/lib/env'
import { convertArticleFromData } from './converter'

import { fetcher } from '@/lib/fetcher'
import { useSuspenseQuery } from '@tanstack/react-query'

const fetchArticleList = async (
	query?: Partial<ArticleListQuery>
): Promise<ArticleList> => {
	const queryParams = new URLSearchParams()
	for (const q in query) {
		const value = query[q as keyof typeof query]
		if (value !== undefined) {
			queryParams.append(q, value.toString())
		}
	}
	const res: ArticleListData = await fetcher(
		`${getApiOrigin()}/articles?${queryParams}`
	)

	return res.map(convertArticleFromData)
}

export const useArticleList = (query?: Partial<ArticleListQuery>) => {
	return useSuspenseQuery({
		queryKey: ['/articles', query],
		queryFn: () => fetchArticleList(query)
	})
}
