import { mockArticle } from '@/features/article/mock/data'
import { db } from '@/features/db'
export async function GET(
	req: Request,
	{ params: { articleId } }: { params: { articleId: string } }
) {
	const article = await db.query.articles.findFirst({
		where: (articles, { eq }) => eq(articles.id, articleId)
	})

	const data = mockArticle
	return Response.json(data)
}

export function PATCH() {
	const data = mockArticle
	return Response.json(data)
}
