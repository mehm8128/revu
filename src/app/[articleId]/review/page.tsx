'use client'

import { useArticle } from '@/features/article/apis/fetchArticle'
import { parseArticleId } from '@/features/article/model/type'
import { useReviewList } from '@/features/review/apis/fetchReviewList'
import { Box, VStack } from '@kuma-ui/core'
import { type MouseEvent, useEffect, useRef, useState } from 'react'
import ReviewPopup from './_components/ReviewPopup'

export interface Coordinate {
	x: number
	y: number
}

export default function Page({
	params: { articleId }
}: { params: { articleId: string } }) {
	const { data: article } = useArticle(parseArticleId(Number(articleId)))
	const { data: reviews } = useReviewList(parseArticleId(Number(articleId)))

	const [selectedText, setSelectedText] = useState('')
	const [coordinate, setCoordinate] = useState<Coordinate>({ x: 0, y: 0 })
	const [pendingReviews, setPendingReviews] = useState<string[]>([])
	const ref = useRef<HTMLDivElement | null>(null)

	const onSubmit = async () => {
		console.log('保存')
		// まとめてpostするのかそれぞれpostするのか要検討
	}

	const handleMouseupEvent = (e: MouseEvent<HTMLDivElement>) => {
		if (ref.current === null) {
			return
		}

		const x = e.clientX
		const y = e.clientY

		const boxX = ref.current.getBoundingClientRect().x
		const boxY = ref.current.getBoundingClientRect().y

		setCoordinate({ x: x - boxX, y: y - boxY })
	}

	useEffect(() => {
		const callback = () => {
			const selected = document.getSelection()
			if (selected !== null) {
				console.log(selected.toString())
				setSelectedText(selected.toString())
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
				<Box position="relative" onMouseUp={handleMouseupEvent} ref={ref}>
					<p>{article.content}</p>
					<ReviewPopup coordinate={coordinate} />
				</Box>
				<button type="submit">保存</button>
			</VStack>
		</main>
	)
}
