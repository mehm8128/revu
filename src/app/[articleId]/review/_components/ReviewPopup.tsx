import FieldContainer from '@/components/FieldContainer'
import Tiptap from '@/features/tiptap/Tiptap'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { Box } from '@kuma-ui/core'
import { Controller, useForm } from 'react-hook-form'
import { minLength, object, string } from 'valibot'

const schema = object({
	comment: string([minLength(1)])
})
interface Review {
	comment: string
}

export default function ReviewPopup() {
	const {
		formState: { errors },
		control,
		trigger,
		getValues
	} = useForm<Review>({
		resolver: valibotResolver(schema),
		defaultValues: {
			comment: ''
		}
	})

	const handleSubmit = async () => {
		await trigger('comment')
		const data = getValues()
		console.log(data)
	}

	return (
		<Box position="absolute">
			<FieldContainer label="レビューコメント" error={errors.comment}>
				<Controller
					control={control}
					name="comment"
					render={({ field }) => <Tiptap field={field} />}
				/>
			</FieldContainer>
			<button type="button" onClick={handleSubmit}>
				コメント
			</button>
		</Box>
	)
}
