import { mockArticle } from '@/features/article/mock/data'

export function GET() {
	const data = mockArticle
	return Response.json(data)
}

export function PATCH() {
	const data = mockArticle
	return Response.json(data)
}
