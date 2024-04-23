'use client'

import { useArticleList } from '@/features/article/apis/fetchArticleList'
import { dateToString } from '@/lib/date'
import { Flex } from '@kuma-ui/core'

export default function ArticleList() {
	const { data: articles } = useArticleList()

	return (
		<ul>
			{articles.map(article => (
				<li key={article.id}>
					<Flex gap={8}>
						<span>{article.title}</span>
						<span>{article.description}</span>
						<span>{dateToString(article.createdAt)}</span>
						<span>{dateToString(article.updatedAt)}</span>
					</Flex>
				</li>
			))}
		</ul>
	)
}
