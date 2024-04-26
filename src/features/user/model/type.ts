import { type Output, brand, object, safeParse, string } from 'valibot'

export const userId = brand(string(), 'userId')
export type UserId = Output<typeof userId>
export const parseUserId = (id: string) => {
	const result = safeParse(userId, id)
	if (!result.success) {
		throw new Error('invalid id')
	}
	return result.output
}

export const userSchema = object({
	id: userId,
	name: string(),
	photo: string()
})
export type User = Output<typeof userSchema>
export type UserList = User[]
