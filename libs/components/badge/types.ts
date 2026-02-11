import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'
import type { badgeVariants } from './variants'

export interface BadgeProps
	extends ComponentProps<'span'>,
		VariantProps<typeof badgeVariants> {}

export type BadgeIconProps = ComponentProps<'span'>

export type BadgeLabelProps = ComponentProps<'span'>

export interface BadgeCloseProps extends ComponentProps<'button'> {
	onClose?: () => void
}
