'use client'

import FieldContainer from '@/components/FieldContainer'
import { editArticle } from '@/features/article/apis/editArticle'
import { useArticle } from '@/features/article/apis/fetchArticle'
import {
	type ArticleCreateSeed,
	articleCreateSeedSchema,
	parseArticleId
} from '@/features/article/model/type'
import { useReviewList } from '@/features/review/apis/fetchReviewList'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { VStack } from '@kuma-ui/core'
import { useForm } from 'react-hook-form'

export default function Page({
	params: { articleId }
}: { params: { articleId: string } }) {
	const { data: article } = useArticle(parseArticleId(Number(articleId)))
	const { data: reviews } = useReviewList(parseArticleId(Number(articleId)))

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<ArticleCreateSeed>({
		resolver: valibotResolver(articleCreateSeedSchema),
		defaultValues: {
			title: article.title,
			description: article.description,
			content: article.content
		}
	})

	const onSubmit = async (data: ArticleCreateSeed) => {
		console.log('保存')
		await editArticle(parseArticleId(Number(articleId)), data)
	}

	return (
		<main>
			<h1>文章の編集</h1>
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
					<textarea {...register('content')} />
				</FieldContainer>
				<button type="submit">保存</button>
			</VStack>
		</main>
	)
}
