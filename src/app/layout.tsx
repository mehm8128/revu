import { Inter } from 'next/font/google'
import './globals.css'

import { Providers } from '@/components/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'revu',
	description: '文章添削サービス'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ja">
			<Providers>
				<body className={inter.className}>{children}</body>
			</Providers>
		</html>
	)
}
