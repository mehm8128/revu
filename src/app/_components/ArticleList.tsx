'use client'

import ArticleItem from '@/app/_components/ArticleItem'
import { useArticleList } from '@/features/article/apis/fetchArticleList'
export default function ArticleList() {
	const { data: articles } = useArticleList()

	return (
		<ul>
			{articles.map(article => (
				<ArticleItem key={article.id} article={article} />
			))}
		</ul>
	)
}
