import { Article, ArticleList, parseId } from '@/features/article/model/type'

export const mockArticle: Article = {
	id: parseId('article id'),
	title: 'title',
	description: 'description',
	content: 'こんにちはおはようございますさようなら。',
	createdAt: new Date('2021-09-01T00:00:00'),
	updatedAt: new Date('2021-09-01T00:00:00')
}

export const mockArticleList: ArticleList = [
	{
		id: parseId('article id1'),
		title: 'title1',
		description: 'description1',
		content: 'こんにちはおはようございますさようなら。',
		createdAt: new Date('2021-09-01T00:00:00'),
		updatedAt: new Date('2021-09-01T00:00:00')
	},
	{
		id: parseId('article id2'),
		title: 'title2',
		description: 'description2',
		content: 'おやすみなさい',
		createdAt: new Date('2021-09-01T00:00:00'),
		updatedAt: new Date('2021-09-01T00:00:00')
	},
	{
		id: parseId('article id3'),
		title: 'title3',
		description: 'description3',
		content: 'プログラミングをしています。',
		createdAt: new Date('2021-09-01T00:00:00'),
		updatedAt: new Date('2021-09-01T00:00:00')
	}
]
