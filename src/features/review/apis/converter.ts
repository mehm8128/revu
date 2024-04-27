import {
	type Review,
	type ReviewCreateSeed,
	type ReviewCreateSeedData,
	type ReviewData,
	type ReviewEditSeed,
	type ReviewEditSeedData,
	reviewCreateSeedSchema,
	reviewSchema
} from '@/features/review/model/type'
import { parse } from 'valibot'

export const convertReviewFromData = (data: ReviewData): Review => {
	return parse(reviewSchema, data)
}

export const convertReviewCreateSeedToData = (
	seed: ReviewCreateSeed
): ReviewCreateSeedData => {
	return parse(reviewCreateSeedSchema, seed)
}

export const convertReviewEditSeedToData = (
	seed: ReviewEditSeed
): ReviewEditSeedData => {
	return seed
}
