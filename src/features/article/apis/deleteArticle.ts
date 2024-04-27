import { getApiOrigin } from '@/lib/env'
import { fetcher } from '@/lib/fetcher'
import type { ArticleId } from '../model/type'

// TODO: mutate
export const deleteArticle = async (id: ArticleId) => {
	await fetcher(`${getApiOrigin()}/api/articles/${id}`, {
		method: 'DELETE'
	})
}
