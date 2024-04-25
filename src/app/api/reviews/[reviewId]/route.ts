import { mockReview } from '@/features/review/mock/data'

export function PATCH() {
	const data = mockReview
	return Response.json(data)
}
