import ArticleItem from '@/app/_components/ArticleItem'
import { fetchArticleList } from '@/features/article/apis/fetchArticleList'
import { Grid } from '@kuma-ui/core'

export default async function Page() {
	const articles = await fetchArticleList()

	return (
		<main>
			<h1>記事一覧</h1>
			<Grid gap={8} gridTemplateColumns="repeat(3, 1fr)">
				{articles.map(article => (
					<ArticleItem key={article.id} article={article} />
				))}
			</Grid>
		</main>
	)
}
