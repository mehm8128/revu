'use client'

import { editArticle } from '@/features/article/apis/editArticle'
import { useArticle } from '@/features/article/apis/fetchArticle'
import {
	ArticleCreateSeed,
	articleCreateSeedSchema,
	parseId
} from '@/features/article/model/type'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { VStack } from '@kuma-ui/core'
import { useForm } from 'react-hook-form'

export default function Page({
	parmas: { articleId }
}: { parmas: { articleId: string } }) {
	const { data: article } = useArticle(parseId(articleId))

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
		await editArticle(data)
	}

	return (
		<main>
			<h1>{article.title}</h1>
			<VStack
				as="form"
				gap={20}
				alignItems="center"
				onSubmit={handleSubmit(onSubmit)}
			>
				<p>{article.description}</p>
				<p>{article.content}</p>
				<button type="submit">保存</button>
			</VStack>
		</main>
	)
}
