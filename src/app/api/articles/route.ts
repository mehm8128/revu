import { mockArticle, mockArticleList } from '@/features/article/mock/data'

export function GET() {
	const data = mockArticleList
	return Response.json(data)
}

export function POST() {
	const data = mockArticle
	return Response.json(data)
}
