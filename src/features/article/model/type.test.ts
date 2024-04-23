import { mockArticle } from '@/features/article/mock/data'
import { safeParse } from 'valibot'
import {
	ArticleCreateSeed,
	ArticleEditSeed,
	articleCreateSeedSchema,
	articleEditSeedSchema
} from './type'

describe('type', () => {
	describe('articleCreateSeed', () => {
		test('全て正常なときにvalid', () => {
			expect(safeParse(articleCreateSeedSchema, mockArticle).success).toBe(true)
		})
		test('内容がないときにinvalid', () => {
			const articleSeed: ArticleCreateSeed = {
				title: 'title',
				description: 'description',
				content: ''
			}
			expect(safeParse(articleCreateSeedSchema, articleSeed).success).toBe(
				false
			)
		})
	})
	describe('articleEditSeed', () => {
		test('全て正常なときにvalid', () => {
			expect(safeParse(articleEditSeedSchema, mockArticle).success).toBe(true)
		})
		test('内容がないときにinvalid', () => {
			const articleSeed: ArticleEditSeed = {
				title: 'title',
				description: 'description',
				content: ''
			}
			expect(safeParse(articleEditSeedSchema, articleSeed).success).toBe(false)
		})
	})
})
