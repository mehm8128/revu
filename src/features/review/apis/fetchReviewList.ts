import { ReviewList, ReviewListData } from '@/features/review/model/type'
import { getApiOrigin } from '@/lib/env'
import { convertReviewFromData } from './converter'

import { ArticleId } from '@/features/article/model/type'
import { fetcher } from '@/lib/fetcher'
import { useSuspenseQuery } from '@tanstack/react-query'

const fetchReviewList = async (id: ArticleId): Promise<ReviewList> => {
	const res: ReviewListData = await fetcher(
		`${getApiOrigin()}/articles/${id}/reviews`
	)

	return res.map(convertReviewFromData)
}

export const useReviewList = (id: ArticleId) => {
	return useSuspenseQuery({
		queryKey: ['articles', id, '/reviews'],
		queryFn: () => fetchReviewList(id)
	})
}
