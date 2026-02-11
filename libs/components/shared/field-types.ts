import type { ComponentProps } from 'react'
import type { VariantProps } from 'tailwind-variants'
import type { fieldHintVariants } from './field-variants'

export type FieldLabelProps = ComponentProps<'label'>

export interface FieldHintProps
	extends ComponentProps<'p'>,
		VariantProps<typeof fieldHintVariants> {}
