'use client'

import type { ReviewCreateSeed } from '@/features/review/model/type'
import { Box, Button, HStack, Text } from '@kuma-ui/core'
import { type Dispatch, type SetStateAction, useState } from 'react'
import { MdModeComment } from 'react-icons/md'
import ReviewComment from './ReviewComment'
import ReviewCommentEdit from './ReviewCommentEdit'

export interface ArticleLineType {
	content: string
	line: number
	reviews: ReviewCreateSeed[]
}

export default function ArticleLine({
	content,
	setPendingReviews
}: {
	content: ArticleLineType
	setPendingReviews: Dispatch<SetStateAction<ReviewCreateSeed[]>>
}) {
	const [openEditor, setOpenEditor] = useState(false)
	const [openReviewComment, setOpenReviewComment] = useState(false)

	const handleOpenEditor = () => {
		setOpenReviewComment(false)
		setOpenEditor(!openEditor)
	}
	const handleOpenReviewComment = () => {
		setOpenEditor(false)
		setOpenReviewComment(!openReviewComment)
	}

	return (
		<Box key={content.line}>
			<HStack>
				<Button
					display="flex"
					alignItems="center"
					border="none"
					bgColor="white"
					py={4}
					gap={8}
					w="100%"
					_hover={{
						backgroundColor: 'gray'
					}}
					onClick={handleOpenEditor}
				>
					<Box>{content.line + 1}</Box>
					<Text>{content.content}</Text>
				</Button>
				{content.reviews.length !== 0 && (
					<Box p={4}>
						<Button
							onClick={handleOpenReviewComment}
							type="button"
							border="none"
							bgColor="white"
						>
							<MdModeComment />
						</Button>
					</Box>
				)}
			</HStack>
			{openEditor && (
				<ReviewCommentEdit
					line={content.line}
					setPendingReviews={setPendingReviews}
					closeCommentEditor={() => setOpenEditor(false)}
				/>
			)}
			<Box>
				{openReviewComment &&
					content.reviews.map(review => (
						<ReviewComment review={review} key={review.comment} />
					))}
			</Box>
		</Box>
	)
}
