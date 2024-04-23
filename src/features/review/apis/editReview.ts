import { getApiOrigin } from '@/lib/env'
import { fetcher } from '@/lib/fetcher'
import type {
	Review,
	ReviewData,
	ReviewEditSeed,
	ReviewId
} from '../model/type'
import { convertReviewEditSeedToData, convertReviewFromData } from './converter'

// TODO: mutate
export const editReview = async (
	id: ReviewId,
	seed: ReviewEditSeed
): Promise<Review> => {
	const seedData = convertReviewEditSeedToData(seed)
	const res: ReviewData = await fetcher(`${getApiOrigin()}/reviews/${id}`, {
		method: 'PATCH',
		body: JSON.stringify(seedData)
	})

	return convertReviewFromData(res)
}
