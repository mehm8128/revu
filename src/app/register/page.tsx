'use client'
import FieldContainer from '@/components/FieldContainer'
import { postArticle } from '@/features/article/apis/postArticle'
import {
	type ArticleCreateSeed,
	articleCreateSeedSchema
} from '@/features/article/model/type'
import Tiptap from '@/features/tiptap/Tiptap'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { VStack } from '@kuma-ui/core'
import { Controller, useForm } from 'react-hook-form'

export default function Page() {
	const {
		register,
		formState: { errors },
		handleSubmit,
		control
	} = useForm<ArticleCreateSeed>({
		resolver: valibotResolver(articleCreateSeedSchema),
		defaultValues: {
			title: '',
			description: '',
			content: ''
		}
	})

	const onSubmit = async (data: ArticleCreateSeed) => {
		console.log('保存')
		const res = await postArticle(data)
		const id = res.id
		console.log('id:', id)
		// TODO: モーダルで登録しました&共有リンクを表示
	}

	return (
		<main>
			<h1>文章の登録</h1>
			<VStack
				as="form"
				gap={20}
				alignItems="center"
				onSubmit={handleSubmit(onSubmit)}
			>
				<FieldContainer label="タイトル" error={errors.title}>
					<input {...register('title')} />
				</FieldContainer>
				<FieldContainer label="説明文" error={errors.title}>
					<textarea {...register('description')} />
				</FieldContainer>
				<FieldContainer label="文章" error={errors.content}>
					<Controller
						control={control}
						name="content"
						render={({ field }) => <Tiptap field={field} />}
					/>
				</FieldContainer>
				<button type="submit">保存</button>
			</VStack>
		</main>
	)
}
