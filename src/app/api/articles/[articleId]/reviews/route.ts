import { mockReviewList } from '@/features/review/mock/data'

export function GET() {
	const data = mockReviewList
	return Response.json(data)
}
