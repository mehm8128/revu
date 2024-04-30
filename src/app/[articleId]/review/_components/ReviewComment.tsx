import type { Review } from '@/features/review/model/type'
import { Box, Text } from '@kuma-ui/core'

export default function ReviewComment({ review }: { review: Review }) {
	const handleEdit = async () => {
		console.log('編集')
	}

	return (
		<Box border="1px solid black" padding={12}>
			<Text>{review.comment}</Text>
		</Box>
	)
}
