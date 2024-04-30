'use client'

import { useArticle } from '@/features/article/apis/fetchArticle'
import { parseArticleId } from '@/features/article/model/type'
import { useReviewList } from '@/features/review/apis/fetchReviewList'
import type { ReviewCreateSeed } from '@/features/review/model/type'
import { Text, VStack } from '@kuma-ui/core'
import { useState } from 'react'
import ArticleLine, { type ArticleLineType } from './_components/ArticleLine'

export default function Page({
	params: { articleId }
}: { params: { articleId: string } }) {
	const { data: article } = useArticle(parseArticleId(Number(articleId)))
	const { data: reviews } = useReviewList(parseArticleId(Number(articleId)))

	const splitedContents: ArticleLineType[] = article.content
		.split('\n')
		.map((content, i) => ({
			content,
			line: i,
			review: reviews.find(review => review.line === i) ?? null
		}))

	const [pendingReviews, setPendingReviews] = useState<ReviewCreateSeed[]>([])
	const peindingReviewCount = pendingReviews.length

	const onSubmit = async () => {
		console.log('保存')
		// まとめてpostするのかそれぞれpostするのか要検討
	}

	return (
		<main>
			<h1>{article.title}</h1>
			<VStack gap={20} alignItems="center">
				<p>{article.description}</p>
				<VStack w="70%" border="1px solid gray">
					{splitedContents.map(content => (
						<ArticleLine
							key={content.line}
							content={content}
							setPendingReviews={setPendingReviews}
						/>
					))}
				</VStack>
				<Text>レビュー件数: {peindingReviewCount}</Text>
				<button onClick={onSubmit} type="button">
					送信
				</button>
			</VStack>
		</main>
	)
}
