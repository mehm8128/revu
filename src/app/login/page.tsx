'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function Page() {
	const { data: session } = useSession()
	if (session) {
		return (
			<>
				Signed in as {session.user?.id} <br />
				<button onClick={() => signOut()} type="button">
					Sign out
				</button>
			</>
		)
	}

	return (
		<main>
			Not signed in <br />
			<button onClick={() => signIn()} type="button">
				Sign in
			</button>
		</main>
	)
}
