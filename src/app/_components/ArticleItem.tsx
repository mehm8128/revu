'use client'

import type { Article } from '@/features/article/model/type'
import { dateToString } from '@/lib/date'
import { Button, HStack, VStack } from '@kuma-ui/core'
import Link from 'next/link'

export default function ArticleItem({ article }: { article: Article }) {
	const handleDeleteArticle = async () => {
		const result = confirm('本当にこの文章を削除しますか？')
		if (!result) return
		// TODO: impl
	}

	return (
		<VStack gap={8} border="1px solid black" borderRadius={8} padding={8}>
			<p>{article.title}</p>
			<p>{article.description}</p>
			<p>
				<span>作成日</span>
				<time dateTime={article.createdAt.toUTCString()}>
					{dateToString(article.createdAt)}
				</time>
			</p>
			<p>
				<span>最終更新</span>
				<time dateTime={article.createdAt.toUTCString()}>
					{dateToString(article.updatedAt)}
				</time>
			</p>
			<HStack gap={8}>
				<Link href={`/${article.id}`}>編集</Link>
				<Button onClick={handleDeleteArticle}>削除</Button>
			</HStack>
		</VStack>
	)
}
