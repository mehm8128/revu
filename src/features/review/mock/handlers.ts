import { http, HttpResponse, type PathParams } from 'msw'

import type {
	Review,
	ReviewCreateSeed,
	ReviewEditSeed
} from '@/features/review/model/type'
import { mockReview, mockReviewList } from './data'

export const reviewHandlers = (apiOrigin: string) => {
	const fetchReviews = (response?: Partial<Review>) => {
		const defaultResponses: Review[] = mockReviewList
		return http.get(`${apiOrigin}/reviews`, () => {
			return HttpResponse.json<Review[]>(
				defaultResponses.map(defaultResponse => ({
					...defaultResponse,
					...response
				}))
			)
		})
	}

	const postReview = () => {
		return http.post<PathParams, ReviewCreateSeed, Review>(
			`${apiOrigin}/reviews`,
			async ({ request }) => {
				const reqBody: ReviewCreateSeed = await request.json()
				return HttpResponse.json<Review>({ ...mockReview, ...reqBody })
			}
		)
	}
	const editReview = () => {
		return http.post<PathParams, ReviewEditSeed, Review>(
			`${apiOrigin}/reviews`,
			async ({ request }) => {
				const reqBody: ReviewEditSeed = await request.json()
				return HttpResponse.json<Review>({ ...mockReview, ...reqBody })
			}
		)
	}

	return { fetchReviews, postReview, editReview }
}
