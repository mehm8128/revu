import {
	Review,
	ReviewCreateSeed,
	ReviewCreateSeedData,
	ReviewData,
	ReviewEditSeed,
	ReviewEditSeedData,
	parseId
} from '@/features/review/model/type'

export const convertReviewFromData = (data: ReviewData): Review => {
	return {
		...data,
		id: parseId(data.id)
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
