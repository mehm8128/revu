import {
	type Article,
	type ArticleList,
	parseArticleId
} from '@/features/article/model/type'

export const mockArticle: Article = {
	id: parseArticleId('articleId'),
	title: 'title',
	description: 'description',
	content: 'こんにちはおはようございますさようなら。',
	createdAt: new Date('2021-09-01T00:00:00'),
	updatedAt: new Date('2021-09-01T00:00:00')
}

export const mockArticleList: ArticleList = [
	{
		id: parseArticleId('articleId1'),
		title: 'title1',
		description: 'description1',
		content: 'こんにちはおはようございますさようなら。',
		createdAt: new Date('2021-09-01T00:00:00'),
		updatedAt: new Date('2021-09-01T00:00:00')
	},
	{
		id: parseArticleId('articleId2'),
		title: 'title2',
		description: 'description2',
		content: 'おやすみなさい',
		createdAt: new Date('2021-09-01T00:00:00'),
		updatedAt: new Date('2021-09-01T00:00:00')
	},
	{
		id: parseArticleId('articleId3'),
		title: 'title3',
		description: 'description3',
		content: 'プログラミングをしています。',
		createdAt: new Date('2021-09-01T00:00:00'),
		updatedAt: new Date('2021-09-01T00:00:00')
	}
]
