import {
	convertArticleCreateSeedToData,
	convertArticleEditSeedToData,
	convertArticleFromData,
	convertArticleListQueryToData
} from '@/features/article/apis/converter'
import {
	Article,
	ArticleCreateSeed,
	ArticleCreateSeedData,
	ArticleData,
	ArticleEditSeed,
	ArticleEditSeedData,
	ArticleListQuery,
	ArticleListQueryData,
	parseId
} from '@/features/article/model/type'

describe('converter', () => {
	describe('convertArticleListQueryToData', () => {
		test('サーバー用のデータに変換できる', () => {
			const articleListQuery: ArticleListQuery = {
				resolved: true
			}
			const expected: ArticleListQueryData = {
				resolved: true
			}

			expect(convertArticleListQueryToData(articleListQuery)).toEqual(expected)
		})
	})
	describe('convertArticleFromData', () => {
		test('フロント用のデータに変換できる', () => {
			const article: ArticleData = {
				id: 'article id',
				title: 'title',
				description: 'description',
				content: 'こんにちはおはようございますさようなら。',
				createdAt: '2021-09-01T00:00:00',
				updatedAt: '2021-09-01T00:00:00'
			}
			const expected: Article = {
				id: parseId('article id'),
				title: 'title',
				description: 'description',
				content: 'こんにちはおはようございますさようなら。',
				createdAt: new Date('2021-09-01T00:00:00'),
				updatedAt: new Date('2021-09-01T00:00:00')
			}

			expect(convertArticleFromData(article)).toEqual(expected)
		})
	})
	describe('convertArticleCreateSeedToData', () => {
		test('サーバー用のデータに変換できる', () => {
			const articleSeed: ArticleCreateSeed = {
				title: 'title',
				description: 'description',
				content: 'こんにちはおはようございますさようなら。'
			}
			const expected: ArticleCreateSeedData = {
				title: 'title',
				description: 'description',
				content: 'こんにちはおはようございますさようなら。'
			}

			expect(convertArticleCreateSeedToData(articleSeed)).toEqual(expected)
		})
	})
	describe('convertArticleEditSeedToData', () => {
		test('サーバー用のデータに変換できる', () => {
			const articleSeed: ArticleEditSeed = {
				title: 'title',
				description: 'description',
				content: 'こんにちはおはようございますさようなら。'
			}
			const expected: ArticleEditSeedData = {
				title: 'title',
				description: 'description',
				content: 'こんにちはおはようございますさようなら。'
			}

			expect(convertArticleEditSeedToData(articleSeed)).toEqual(expected)
		})
	})
})
