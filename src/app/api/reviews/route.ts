import { db } from '@/features/db'
import { reviews } from '@/features/db/schema'
import { mockReview } from '@/features/review/mock/data'
import type { ReviewCreateSeedData } from '@/features/review/model/type'

export async function POST(req: Request) {
	const reqBody: ReviewCreateSeedData = await req.json()

	await db.insert(reviews).values({
		...reqBody,
		createdAt: new Date(),
		updatedAt: new Date()
	})

	const data = mockReview
	return Response.json(data)
}
