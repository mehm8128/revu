'use client'

import { useArticle } from '@/features/article/apis/fetchArticle'
import { parseId } from '@/features/article/model/type'
import { VStack } from '@kuma-ui/core'

export default function Page({
	parmas: { articleId }
}: { parmas: { articleId: string } }) {
	const { data: article } = useArticle(parseId(articleId))

	const onSubmit = async () => {
		console.log('保存')
		// まとめてpostするのかそれぞれpostするのか要検討
	}

	return (
		<main>
			<h1>{article.title}</h1>
			<VStack as="form" gap={20} alignItems="center" onSubmit={onSubmit}>
				<p>{article.description}</p>
				<p>{article.content}</p>
				<button type="submit">保存</button>
			</VStack>
		</main>
	)
}
