import { mockReview } from '@/features/review/mock/data'

export function POST() {
	const data = mockReview
	return Response.json(data)
}
