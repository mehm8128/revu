import {
	type Review,
	type ReviewCreateSeed,
	type ReviewCreateSeedData,
	type ReviewData,
	type ReviewEditSeed,
	type ReviewEditSeedData,
	parseId
} from '@/features/review/model/type'

export const convertReviewFromData = (data: ReviewData): Review => {
	return {
		...data,
		id: parseId(data.id),
		createdAt: new Date(data.createdAt),
		updatedAt: new Date(data.updatedAt)
	}
}

export const convertReviewCreateSeedToData = (
	seed: ReviewCreateSeed
): ReviewCreateSeedData => {
	return {
		comment: seed.comment
	}
}

export const convertReviewEditSeedToData = (
	seed: ReviewEditSeed
): ReviewEditSeedData => {
	return {
		comment: seed.comment
	}
}
