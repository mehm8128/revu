import { parseArticleId } from '@/features/article/model/type'
import {
	type Review,
	type ReviewCreateSeed,
	type ReviewCreateSeedData,
	type ReviewData,
	type ReviewEditSeed,
	type ReviewEditSeedData,
	parseReviewId
} from '@/features/review/model/type'
import { parseUserId } from '@/features/user/model/type'

export const convertReviewFromData = (data: ReviewData): Review => {
	return {
		...data,
		id: parseReviewId(data.id),
		articleId: parseArticleId(data.articleId),
		createdBy: parseUserId(data.createdBy),
		createdAt: new Date(data.createdAt),
		updatedAt: new Date(data.updatedAt)
	}
}

export const convertReviewCreateSeedToData = (
	seed: ReviewCreateSeed
): ReviewCreateSeedData => {
	return {
		line: seed.line,
		comment: seed.comment,
		createdBy: seed.createdBy
	}
}

export const convertReviewEditSeedToData = (
	seed: ReviewEditSeed
): ReviewEditSeedData => {
	return {
		comment: seed.comment
	}
}
