import type { ArticleId } from '@/features/article/model/type'
import { getApiOrigin } from '@/lib/env'
import { fetcher } from '@/lib/fetcher'
import type { Review, ReviewCreateSeed, ReviewData } from '../model/type'
import {
	convertReviewCreateSeedToData,
	convertReviewFromData
} from './converter'

// TODO: mutate
export const postReview = async (
	articleId: ArticleId,
	seed: ReviewCreateSeed
): Promise<Review> => {
	const seedData = convertReviewCreateSeedToData(seed)
	const res: ReviewData = await fetcher(
		`${getApiOrigin()}/articles/${articleId}/reviews`,
		{
			method: 'POST',
			body: JSON.stringify(seedData)
		}
	)

	return convertReviewFromData(res)
}
