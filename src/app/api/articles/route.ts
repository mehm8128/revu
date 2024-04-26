import { mockArticle, mockArticleList } from '@/features/article/mock/data'
import type { ArticleCreateSeedData } from '@/features/article/model/type'
import { db } from '@/features/db'
import { articles } from '@/features/db/schema'
export async function GET() {
	const articleList = await db.query.articles.findMany()

	const data = mockArticleList
	return Response.json(data)
}

export async function POST(req: Request) {
	const reqBody: ArticleCreateSeedData = await req.json()

	await db.insert(articles).values({
		...reqBody,
		createdAt: new Date(),
		updatedAt: new Date()
	})

	const data = mockArticle
	return Response.json(data)
}
