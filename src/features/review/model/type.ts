import { articleId } from '@/features/article/model/type'
import { userId } from '@/features/user/model/type'
import {
	type Output,
	brand,
	date,
	minLength,
	number,
	object,
	safeParse,
	string
} from 'valibot'

export const reviewId = brand(string(), 'reviewId')
export type ReviewId = Output<typeof reviewId>
export const parseReviewId = (id: string) => {
	const result = safeParse(reviewId, id)
	if (!result.success) {
		throw new Error('invalid id')
	}
	return result.output
}

export const reviewSchema = object({
	id: reviewId,
	articleId: articleId,
	line: number(),
	comment: string(),
	createdBy: userId,
	createdAt: date(),
	updatedAt: date()
})
export type Review = Output<typeof reviewSchema>
export type ReviewList = Review[]

export const reviewCreateSeedSchema = object({
	articleId: articleId,
	line: number(),
	comment: string([minLength(1)]),
	createdBy: userId
})
export type ReviewCreateSeed = Output<typeof reviewCreateSeedSchema>

export const reviewEditSeedSchema = object({
	comment: string([minLength(1)])
})
export type ReviewEditSeed = Output<typeof reviewEditSeedSchema>

export const reviewDataSchema = object({
	id: string(),
	articleId: string(),
	line: number(),
	comment: string(),
	createdBy: string(),
	createdAt: string(),
	updatedAt: string()
})
export type ReviewData = Output<typeof reviewDataSchema>
export type ReviewListData = ReviewData[]

export const reviewCreateSeedDataSchema = object({
	articleId: string(),
	line: number(),
	comment: string(),
	createdBy: string()
})
export type ReviewCreateSeedData = Output<typeof reviewCreateSeedDataSchema>

export const reviewEditSeedDataSchema = object({
	comment: string()
})
export type ReviewEditSeedData = Output<typeof reviewEditSeedDataSchema>
