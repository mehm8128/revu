import { articleId, parseArticleId } from '@/features/article/model/type'
import { reviews } from '@/features/db/schema'
import { parseUserId, userId } from '@/features/user/model/type'
import { createInsertSchema, createSelectSchema } from 'drizzle-valibot'
import {
	type Output,
	brand,
	minLength,
	number,
	object,
	pick,
	safeParse,
	string,
	transform
} from 'valibot'

export const reviewId = brand(number(), 'reviewId')
export type ReviewId = Output<typeof reviewId>
export const parseReviewId = (id: number) => {
	const result = safeParse(reviewId, id)
	if (!result.success) {
		throw new Error('invalid id')
	}
	return result.output
}

export const reviewSchema = transform(
	object({
		id: reviewId,
		articleId: articleId,
		line: number(),
		comment: string(),
		createdBy: userId,
		createdAt: string(),
		updatedAt: string()
	}),
	({ id, articleId, createdBy, createdAt, updatedAt, ...rest }) => ({
		id: parseReviewId(id),
		articleId: parseArticleId(id),
		createdBy: parseUserId(createdBy),
		createdAt: new Date(createdAt),
		updatedAt: new Date(updatedAt),
		...rest
	})
)
export type Review = Output<typeof reviewSchema>
export type ReviewList = Review[]

export const reviewCreateSeedSchema = object({
	line: number(),
	comment: string([minLength(1)]),
	createdBy: userId
})
export type ReviewCreateSeed = Output<typeof reviewCreateSeedSchema>

export const reviewEditSeedSchema = object({
	comment: string([minLength(1)])
})
export type ReviewEditSeed = Output<typeof reviewEditSeedSchema>

const reviewDataSchema = createSelectSchema(reviews, {
	createdAt: string(),
	updatedAt: string()
})

export type ReviewData = Output<typeof reviewDataSchema>
export type ReviewListData = ReviewData[]

export const reviewCreateSeedDataSchema = pick(createInsertSchema(reviews), [
	'line',
	'comment',
	'createdBy'
])
export type ReviewCreateSeedData = Output<typeof reviewCreateSeedDataSchema>

export const reviewEditSeedDataSchema = pick(createInsertSchema(reviews), [
	'comment'
])
export type ReviewEditSeedData = Output<typeof reviewEditSeedDataSchema>
