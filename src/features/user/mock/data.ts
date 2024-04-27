import {
	type User,
	type UserList,
	parseUserId
} from '@/features/user/model/type'

export const mockUser: User = {
	id: parseUserId('userId'),
	name: 'userName',
	photo: 'https://example.com'
}

export const mockUserList: UserList = [
	{
		id: parseUserId('userId1'),
		name: 'userName1',
		photo: 'https://example.com'
	},
	{
		id: parseUserId('userId2'),
		name: 'userName2',
		photo: 'https://example.com'
	},
	{
		id: parseUserId('userId3'),
		name: 'userName3',
		photo: 'https://example.com'
	}
]
