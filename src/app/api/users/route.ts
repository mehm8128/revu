import { db } from '@/features/db'
import { mockUserList } from '@/features/user/mock/data'

export async function GET() {
	const allUsers = await db.query.users.findMany()

	const data = mockUserList
	return Response.json(data)
}
