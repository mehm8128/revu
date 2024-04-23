import { Article } from '@/features/article/model/type'
import { dateToString } from '@/lib/date'
import { Flex } from '@kuma-ui/core'
import Link from 'next/link'

export default function ArticleItem({ article }: { article: Article }) {
	return (
		<li>
			<Flex gap={8}>
				<span>{article.title}</span>
				<span>{article.description}</span>
				<span>{dateToString(article.createdAt)}</span>
				<span>{dateToString(article.updatedAt)}</span>
				<Link href={`/${article.id}`}>編集</Link>
			</Flex>
		</li>
	)
}
