import {
	type Article,
	type ArticleList,
	parseArticleId
} from '@/features/article/model/type'
import { parseUserId } from '@/features/user/model/type'

export const mockArticle: Article = {
	id: parseArticleId(1),
	title: 'title',
	description: 'description',
	content: 'こんにちはおはようございますさようなら。',
	createdBy: parseUserId('userId'),
	createdAt: new Date('2021-09-01T00:00:00'),
	updatedAt: new Date('2021-09-01T00:00:00')
}

export const mockArticleList: ArticleList = [
	{
		id: parseArticleId(1),
		title: 'title1',
		description: 'description1',
		content: 'こんにちはおはようございますさようなら。',
		createdBy: parseUserId('userId1'),
		createdAt: new Date('2021-09-01T00:00:00'),
		updatedAt: new Date('2021-09-01T00:00:00')
	},
	{
		id: parseArticleId(2),
		title: 'title2',
		description: 'description2',
		content: 'おやすみなさい',
		createdAt: new Date('2021-09-01T00:00:00'),
		createdBy: parseUserId('userId2'),
		updatedAt: new Date('2021-09-01T00:00:00')
	},
	{
		id: parseArticleId(3),
		title: 'title3',
		description: 'description3',
		content: 'プログラミングをしています。',
		createdBy: parseUserId('userId3'),
		createdAt: new Date('2021-09-01T00:00:00'),
		updatedAt: new Date('2021-09-01T00:00:00')
	}
]
