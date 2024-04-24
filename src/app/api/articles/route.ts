import { mockArticleList } from '@/features/article/mock/data'

export function GET() {
	const data = mockArticleList
	return Response.json(data)
}
