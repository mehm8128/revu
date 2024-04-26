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
import {
	convertReviewCreateSeedToData,
	convertReviewEditSeedToData,
	convertReviewFromData
} from './converter'

describe('converter', () => {
	describe('convertReviewFromData', () => {
		test('フロント用のデータに変換できる', () => {
			const review: ReviewData = {
				id: 'reviewId1',
				line: 1,
				articleId: 'articleId1',
				comment: 'comment',
				createdBy: 'userId1',
				createdAt: '2021-01-01T00:00:00Z',
				updatedAt: '2021-01-01T00:00:00Z'
			}
			const expected: Review = {
				id: parseReviewId('reviewId1'),
				articleId: parseArticleId('articleId1'),
				line: 1,
				comment: 'comment',
				createdBy: parseUserId('userId1'),
				createdAt: new Date('2021-01-01T00:00:00Z'),
				updatedAt: new Date('2021-01-01T00:00:00Z')
			}

			expect(convertReviewFromData(review)).toEqual(expected)
		})
	})
	describe('convertReviewCreateSeedToData', () => {
		test('サーバー用のデータに変換できる', () => {
			const reviewSeed: ReviewCreateSeed = {
				articleId: parseArticleId('articleId'),
				line: 1,
				comment: 'comment',
				createdBy: parseUserId('userId')
			}
			const expected: ReviewCreateSeedData = {
				articleId: 'articleId',
				line: 1,
				comment: 'comment',
				createdBy: 'userId'
			}

			expect(convertReviewCreateSeedToData(reviewSeed)).toEqual(expected)
		})
	})
	describe('convertReviewEditSeedToData', () => {
		test('サーバー用のデータに変換できる', () => {
			const reviewSeed: ReviewEditSeed = {
				comment: 'comment'
			}
			const expected: ReviewEditSeedData = {
				comment: 'comment'
			}

			expect(convertReviewEditSeedToData(reviewSeed)).toEqual(expected)
		})
	})
})
