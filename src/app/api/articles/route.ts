import { mockArticle, mockArticleList } from '@/features/article/mock/data'
import { db } from '@/features/db'
export async function GET() {
	const articleList = await db.query.articles.findMany()

	const data = mockArticleList
	return Response.json(data)
}

export function POST() {
	const data = mockArticle
	return Response.json(data)
}
