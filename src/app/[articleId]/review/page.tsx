'use client'

import { useArticle } from '@/features/article/apis/fetchArticle'
import { parseId } from '@/features/article/model/type'
import { useReviewList } from '@/features/review/apis/fetchReviewList'
import { Box, VStack } from '@kuma-ui/core'
import { useEffect, useState } from 'react'
import ReviewPopup from './_components/ReviewPopup'

export default function Page({
	params: { articleId }
}: { params: { articleId: string } }) {
	const { data: article } = useArticle(parseId(articleId))
	const { data: reviews } = useReviewList(parseId(articleId))

	const [pendingReviews, setPendingReviews] = useState<string[]>([])

	const onSubmit = async () => {
		console.log('保存')
		// まとめてpostするのかそれぞれpostするのか要検討
	}

	useEffect(() => {
		const callback = () => {
			const selected = document.getSelection()
			if (selected !== null) {
				console.log(selected.toString())
			}
		}

		document.addEventListener('selectionchange', callback)
		return () => {
			document.removeEventListener('selectionchange', callback)
		}
	}, [])

	return (
		<main>
			<h1>{article.title}</h1>
			<VStack as="form" gap={20} alignItems="center" onSubmit={onSubmit}>
				<p>{article.description}</p>
				<Box position="relative">
					<p>{article.content}</p>
					<ReviewPopup />
				</Box>
				<button type="submit">保存</button>
			</VStack>
		</main>
	)
}
