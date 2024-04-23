import { mockArticle } from '@/features/article/mock/data'
import { safeParse } from 'valibot'
import { ArticleCreateSeed, articleCreateSeedSchema } from './type'

describe('type', () => {
	describe('articleCreateSeed', () => {
		test('全て正常なときにvalid', () => {
			expect(safeParse(articleCreateSeedSchema, mockArticle).success).toBe(true)
		})
		test('内容がないときにinvalid', () => {
			const articleSeed: ArticleCreateSeed = {
				content: ''
			}
			expect(safeParse(articleCreateSeedSchema, articleSeed).success).toBe(
				false
			)
		})
	})
})
