import { mockReview } from '@/features/review/mock/data'
import { parseUserId } from '@/features/user/model/type'
import { safeParse } from 'valibot'
import {
	type ReviewCreateSeed,
	type ReviewEditSeed,
	reviewCreateSeedSchema,
	reviewEditSeedSchema
} from './type'

describe('type', () => {
	describe('reviewCreateSeed', () => {
		test('全て正常なときにvalid', () => {
			expect(safeParse(reviewCreateSeedSchema, mockReview).success).toBe(true)
		})
		test('内容がないときにinvalid', () => {
			const reviewSeed: ReviewCreateSeed = {
				line: 1,
				comment: '',
				createdBy: parseUserId('userId')
			}
			expect(safeParse(reviewCreateSeedSchema, reviewSeed).success).toBe(false)
		})
	})
	describe('reviewEditSeed', () => {
		test('全て正常なときにvalid', () => {
			expect(safeParse(reviewEditSeedSchema, mockReview).success).toBe(true)
		})
		test('内容がないときにinvalid', () => {
			const reviewSeed: ReviewEditSeed = {
				comment: ''
			}
			expect(safeParse(reviewEditSeedSchema, reviewSeed).success).toBe(false)
		})
	})
})
