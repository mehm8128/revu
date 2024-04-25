import { type ReviewList, parseId } from '@/features/review/model/type'
import type { Review } from '@/features/review/model/type'

export const mockReview: Review = {
	id: parseId('reviewId'),
	comment: 'comment',
	createdAt: new Date('2021-01-01T00:00:00Z'),
	updatedAt: new Date('2021-01-01T00:00:00Z')
}

export const mockReviewList: ReviewList = [
	{
		id: parseId('reviewId1'),
		comment: 'comment1',
		createdAt: new Date('2021-01-01T00:00:00Z'),
		updatedAt: new Date('2021-01-01T00:00:00Z')
	},
	{
		id: parseId('reviewId2'),
		comment: 'comment2',
		createdAt: new Date('2021-01-01T00:00:00Z'),
		updatedAt: new Date('2021-01-01T00:00:00Z')
	},
	{
		id: parseId('reviewId3'),
		comment: 'comment3',
		createdAt: new Date('2021-01-01T00:00:00Z'),
		updatedAt: new Date('2021-01-01T00:00:00Z')
	}
]
