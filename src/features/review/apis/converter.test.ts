import {
	type Review,
	type ReviewCreateSeed,
	type ReviewCreateSeedData,
	type ReviewData,
	type ReviewEditSeed,
	type ReviewEditSeedData,
	parseId
} from '@/features/review/model/type'
import {
	convertReviewCreateSeedToData,
	convertReviewEditSeedToData,
	convertReviewFromData
} from './converter'

describe('converter', () => {
	describe('convertReviewFromData', () => {
		test('フロント用のデータに変換できる', () => {
			const review: ReviewData = {
				id: 'review id1',
				comment: 'comment',
				createdAt: '2021-01-01T00:00:00Z',
				updatedAt: '2021-01-01T00:00:00Z'
			}
			const expected: Review = {
				id: parseId('review id1'),
				comment: 'comment',
				createdAt: new Date('2021-01-01T00:00:00Z'),
				updatedAt: new Date('2021-01-01T00:00:00Z')
			}

			expect(convertReviewFromData(review)).toEqual(expected)
		})
	})
	describe('convertReviewCreateSeedToData', () => {
		test('サーバー用のデータに変換できる', () => {
			const reviewSeed: ReviewCreateSeed = {
				comment: 'comment'
			}
			const expected: ReviewCreateSeedData = {
				comment: 'comment'
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
