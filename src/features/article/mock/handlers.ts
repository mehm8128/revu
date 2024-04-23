import { http, HttpResponse, PathParams } from 'msw'

import { Article, ArticleCreateSeed } from '@/features/article/model/type'
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

	const postArticle = () => {
		return http.post<PathParams, ArticleCreateSeed, Article>(
			`${apiOrigin}/articles`,
			async ({ request }) => {
				const reqBody: ArticleCreateSeed = await request.json()
				return HttpResponse.json<Article>({ ...mockArticle, ...reqBody })
			}
		)
	}

	return { fetchArticles, postArticle }
}
