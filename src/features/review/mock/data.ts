import { parseArticleId } from '@/features/article/model/type'
import { type ReviewList, parseReviewId } from '@/features/review/model/type'
import type { Review } from '@/features/review/model/type'
import { parseUserId } from '@/features/user/model/type'

export const mockReview: Review = {
	id: parseReviewId(1),
	articleId: parseArticleId(1),
	line: 1,
	comment: 'comment',
	createdBy: parseUserId('userId'),
	createdAt: new Date('2021-01-01T00:00:00Z'),
	updatedAt: new Date('2021-01-01T00:00:00Z')
}

export const mockReviewList: ReviewList = [
	{
		id: parseReviewId(1),
		articleId: parseArticleId(1),
		line: 1,
		comment: 'comment1',
		createdBy: parseUserId('userId1'),
		createdAt: new Date('2021-01-01T00:00:00Z'),
		updatedAt: new Date('2021-01-01T00:00:00Z')
	},
	{
		id: parseReviewId(2),
		articleId: parseArticleId(2),
		line: 2,
		comment: 'comment2',
		createdBy: parseUserId('userId2'),
		createdAt: new Date('2021-01-01T00:00:00Z'),
		updatedAt: new Date('2021-01-01T00:00:00Z')
	},
	{
		id: parseReviewId(3),
		articleId: parseArticleId(3),
		line: 3,
		comment: 'comment3',
		createdBy: parseUserId('userId3'),
		createdAt: new Date('2021-01-01T00:00:00Z'),
		updatedAt: new Date('2021-01-01T00:00:00Z')
	}
]
