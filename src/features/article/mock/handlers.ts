import { http, HttpResponse, type PathParams } from 'msw'

import type {
	Article,
	ArticleCreateSeed,
	ArticleEditSeed
} from '@/features/article/model/type'
import { mockArticle, mockArticleList } from './data'

export const articleHandlers = (apiOrigin: string) => {
	const fetchArticles = (response?: Partial<Article>) => {
		const defaultResponses: Article[] = mockArticleList
		return http.get(`${apiOrigin}/articles`, () => {
			return HttpResponse.json<Article[]>(
				defaultResponses.map(defaultResponse => ({
					...defaultResponse,
					...response
				}))
			)
		})
	}
	const fetchArticle = (response?: Partial<Article>) => {
		const defaultResponse: Article = mockArticle
		return http.get(`${apiOrigin}/articles/:id`, () => {
			return HttpResponse.json<Article>({
				...defaultResponse,
				...response
			})
		})
	}

	const postArticle = () => {
		return http.post<PathParams, ArticleCreateSeed, Article>(
			`${apiOrigin}/articles/:id`,
			async ({ request }) => {
				const reqBody: ArticleCreateSeed = await request.json()
				return HttpResponse.json<Article>({ ...mockArticle, ...reqBody })
			}
		)
	}
	const editArticle = () => {
		return http.post<PathParams, ArticleEditSeed, Article>(
			`${apiOrigin}/articles/:id`,
			async ({ request }) => {
				const reqBody: ArticleEditSeed = await request.json()
				return HttpResponse.json<Article>({ ...mockArticle, ...reqBody })
			}
		)
	}

	return { fetchArticles, fetchArticle, postArticle, editArticle }
}
