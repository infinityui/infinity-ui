import type { ComponentProps } from 'react'
import type { Select } from '@base-ui/react/select'

export interface SelectProps extends ComponentProps<typeof Select.Root> {
	placeholder?: string
	size?: 'small' | 'medium'
	className?: string
}

export type SelectItemProps = ComponentProps<typeof Select.Item>
