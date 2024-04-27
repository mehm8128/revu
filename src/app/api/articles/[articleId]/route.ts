import { mockArticle } from '@/features/article/mock/data'
import type { ArticleEditSeedData } from '@/features/article/model/type'
import { db } from '@/features/db'
import { articles } from '@/features/db/schema'
import { eq } from 'drizzle-orm'

export async function GET(
	req: Request,
	{ params: { articleId } }: { params: { articleId: string } }
) {
	const article = await db.query.articles.findFirst({
		where: (articles, { eq }) => eq(articles.id, Number(articleId))
	})

	const data = mockArticle
	return Response.json(data)
}

export async function PATCH(
	req: Request,
	{ params: { articleId } }: { params: { articleId: string } }
) {
	const reqBody: ArticleEditSeedData = await req.json()

	await db
		.update(articles)
		.set({
			...reqBody,
			updatedAt: new Date()
		})
		.where(eq(articles.id, Number(articleId)))

	const data = mockArticle
	return Response.json(data)
}

export async function DELETE(
	req: Request,
	{ params: { articleId } }: { params: { articleId: string } }
) {
	await db.delete(articles).where(eq(articles.id, Number(articleId)))

	return Response.json({ message: 'ok' })
}
