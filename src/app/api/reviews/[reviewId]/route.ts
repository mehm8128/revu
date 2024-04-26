import { db } from '@/features/db'
import { reviews } from '@/features/db/schema'
import { mockReview } from '@/features/review/mock/data'
import type { ReviewEditSeedData } from '@/features/review/model/type'
import { eq } from 'drizzle-orm'

export async function PATCH(
	req: Request,
	{ params: { reviewId } }: { params: { reviewId: string } }
) {
	const reqBody: ReviewEditSeedData = await req.json()

	await db
		.update(reviews)
		.set({
			...reqBody,
			updatedAt: new Date()
		})
		.where(eq(reviews.id, Number(reviewId)))

	const data = mockReview
	return Response.json(data)
}
