import type { ComponentProps } from 'react'
import type { Combobox } from '@base-ui/react/combobox'

export interface AutocompleteProps extends ComponentProps<typeof Combobox.Root> {
	placeholder?: string
	size?: 'small' | 'medium'
	className?: string
	items: string[]
}

export type AutocompleteItemProps = ComponentProps<typeof Combobox.Item>
