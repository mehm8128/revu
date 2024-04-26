import { db } from '@/features/db'
import { mockReviewList } from '@/features/review/mock/data'

export async function GET(
	req: Request,
	{ params: { articleId } }: { params: { articleId: string } }
) {
	const reviewList = await db.query.reviews.findMany({
		where: (reviews, { eq }) => eq(reviews.articleId, articleId)
	})

	const data = mockReviewList
	return Response.json(data)
}
