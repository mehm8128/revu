import ArticleList from '@/app/_components/ArticleList'
import SuspenseWithErrorBoundary from '@/components/SuspenseWithErrorBoundary'

export default function Page() {
	return (
		<main>
			<h1>記事一覧</h1>
			<SuspenseWithErrorBoundary>
				<ArticleList />
			</SuspenseWithErrorBoundary>
		</main>
	)
}
