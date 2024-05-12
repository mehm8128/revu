import { db } from '@/features/db'
import { reviews } from '@/features/db/schema'
import { mockReviewList } from '@/features/review/mock/data'
import type { ReviewCreateSeedData } from '@/features/review/model/type'

export async function GET(
	req: Request,
	{ params: { articleId } }: { params: { articleId: string } }
) {
	const reviewList = await db.query.reviews.findMany({
		where: (reviews, { eq }) => eq(reviews.articleId, Number(articleId))
	})

	const data = mockReviewList
	return Response.json(data)
}

export async function POST(
	req: Request,
	{ params: { articleId } }: { params: { articleId: string } }
) {
	const reqBody: ReviewCreateSeedData = await req.json()

	const res = await db
		.insert(reviews)
		.values({
			...reqBody,
			articleId: Number(articleId),
			createdAt: new Date(),
			updatedAt: new Date()
		})
		.returning()

	return Response.json(res[0])
}
