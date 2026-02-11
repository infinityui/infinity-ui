import type { ComponentProps } from 'react'
import type { Dialog } from '@base-ui/react/dialog'

export interface ModalProps extends ComponentProps<typeof Dialog.Root> {
	showClose?: boolean
}

export type ModalTitleProps = ComponentProps<typeof Dialog.Title>

export type ModalDescriptionProps = ComponentProps<typeof Dialog.Description>

export type ModalFooterProps = ComponentProps<'div'>
