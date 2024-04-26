import { mockArticle } from '@/features/article/mock/data'
import { parseUserId } from '@/features/user/model/type'
import { safeParse } from 'valibot'
import {
	type ArticleCreateSeed,
	type ArticleEditSeed,
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
				content: '',
				createdBy: parseUserId('userId')
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
