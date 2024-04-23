import { Box, VStack } from '@kuma-ui/core'
import type { ReactNode } from 'react'
import type { FieldError } from 'react-hook-form'

export default function FieldContainer({
	label,
	children,
	error
}: {
	label: string
	children: ReactNode
	error?: FieldError
}) {
	return (
		<VStack gap={8}>
			{label ? (
				<VStack>
					<Box mb={4}>{label}</Box>
					{children}
				</VStack>
			) : (
				children
			)}
			<Box color="red" h={16}>
				{error?.message}
			</Box>
		</VStack>
	)
}
