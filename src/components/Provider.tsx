'use client'

import { KumaRegistry } from '@kuma-ui/next-plugin/registry'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider as JotaiProvider } from 'jotai'
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(() => new QueryClient())

	return (
		<SessionProvider>
			<KumaRegistry>
				<JotaiProvider>
					<QueryClientProvider client={queryClient}>
						{children}
					</QueryClientProvider>
				</JotaiProvider>
			</KumaRegistry>
		</SessionProvider>
	)
}
