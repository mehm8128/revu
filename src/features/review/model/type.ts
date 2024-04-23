import {
	type Output,
	brand,
	date,
	minLength,
	object,
	safeParse,
	string
} from 'valibot'

export const reviewId = brand(string(), 'reviewId')
export type ReviewId = Output<typeof reviewId>
export const parseId = (id: string) => {
	const result = safeParse(reviewId, id)
	if (!result.success) {
		throw new Error('invalid id')
	}
	return result.output
}

export const reviewSchema = object({
	id: reviewId,
	comment: string(),
	createdAt: date(),
	updatedAt: date()
})
export type Review = Output<typeof reviewSchema>
export type ReviewList = Review[]

export const reviewCreateSeedSchema = object({
	comment: string([minLength(1)])
})
export type ReviewCreateSeed = Output<typeof reviewCreateSeedSchema>

export const reviewEditSeedSchema = object({
	comment: string([minLength(1)])
})
export type ReviewEditSeed = Output<typeof reviewEditSeedSchema>

export const reviewDataSchema = object({
	id: string(),
	comment: string(),
	createdAt: string(),
	updatedAt: string()
})
export type ReviewData = Output<typeof reviewDataSchema>
export type ReviewListData = ReviewData[]

export const reviewCreateSeedDataSchema = object({
	comment: string()
})
export type ReviewCreateSeedData = Output<typeof reviewCreateSeedDataSchema>

export const reviewEditSeedDataSchema = object({
	comment: string()
})
export type ReviewEditSeedData = Output<typeof reviewEditSeedDataSchema>
