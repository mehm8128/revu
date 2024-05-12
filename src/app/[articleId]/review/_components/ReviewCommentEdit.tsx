import FieldContainer from '@/components/FieldContainer'
import {
	type ReviewCreateSeed,
	reviewCreateSeedSchema
} from '@/features/review/model/type'
import Tiptap from '@/features/tiptap/Tiptap'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { Box, HStack } from '@kuma-ui/core'
import { useSession } from 'next-auth/react'
import type { Dispatch, SetStateAction } from 'react'
import { Controller, useForm } from 'react-hook-form'

export default function ReviewCommentEdit({
	line,
	setPendingReviews,
	closeCommentEditor
}: {
	line: number
	setPendingReviews: Dispatch<SetStateAction<ReviewCreateSeed[]>>
	closeCommentEditor: () => void
}) {
	const { data: session } = useSession()

	const {
		formState: { errors },
		control,
		trigger,
		getValues
	} = useForm<ReviewCreateSeed>({
		resolver: valibotResolver(reviewCreateSeedSchema),
		defaultValues: {
			comment: '',
			// TODO: 取れなかったときにエラーにしたい
			createdBy: session?.user?.id ?? '1',
			line: line
		}
	})

	const handleSubmit = async () => {
		const result = await trigger('comment')
		if (!result) {
			return
		}
		const data = getValues()
		console.log(data)
		setPendingReviews(prev => [...prev, data])
	}

	return (
		<Box border="1px solid black" padding={12}>
			<FieldContainer label="レビューコメント" error={errors.comment}>
				<Controller
					control={control}
					name="comment"
					render={({ field }) => <Tiptap field={field} />}
				/>
			</FieldContainer>
			<HStack justifyContent="flex-end" gap={8}>
				<button type="button" onClick={handleSubmit}>
					コメント
				</button>
				<button type="button" onClick={closeCommentEditor}>
					閉じる
				</button>
			</HStack>
		</Box>
	)
}
