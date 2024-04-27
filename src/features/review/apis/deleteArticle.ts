import { getApiOrigin } from '@/lib/env'
import { fetcher } from '@/lib/fetcher'
import type { ReviewId } from '../model/type'

// TODO: mutate
export const deleteReview = async (id: ReviewId) => {
	await fetcher(`${getApiOrigin()}/api/reviews/${id}`, {
		method: 'DELETE'
	})
}
