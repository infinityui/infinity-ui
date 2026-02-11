import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Modal } from './modal'

describe('Modal', () => {
	it('renders trigger', () => {
		render(
			<Modal>
				<Modal.Trigger render={<span />}>Open</Modal.Trigger>
				<Modal.Title>Title</Modal.Title>
			</Modal>
		)
		expect(screen.getByText('Open')).toBeInTheDocument()
	})

	it('opens on trigger click and shows content', async () => {
		const user = userEvent.setup()
		render(
			<Modal>
				<Modal.Trigger render={<span />}>Open</Modal.Trigger>
				<Modal.Title>My Dialog</Modal.Title>
				<Modal.Description>A description</Modal.Description>
			</Modal>
		)

		await user.click(screen.getByText('Open'))

		expect(screen.getByText('My Dialog')).toBeInTheDocument()
		expect(screen.getByText('A description')).toBeInTheDocument()
	})

	it('renders close button when showClose is true', async () => {
		const user = userEvent.setup()
		render(
			<Modal showClose>
				<Modal.Trigger render={<span />}>Open</Modal.Trigger>
				<Modal.Title>Title</Modal.Title>
			</Modal>
		)

		await user.click(screen.getByText('Open'))
		expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
	})

	it('does not render close button by default', async () => {
		const user = userEvent.setup()
		render(
			<Modal>
				<Modal.Trigger render={<span />}>Open</Modal.Trigger>
				<Modal.Title>Title</Modal.Title>
			</Modal>
		)

		await user.click(screen.getByText('Open'))
		expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument()
	})

	describe('Modal.Title', () => {
		it('has data-slot attribute', async () => {
			const user = userEvent.setup()
			render(
				<Modal>
					<Modal.Trigger render={<span />}>Open</Modal.Trigger>
					<Modal.Title data-testid="title">Title</Modal.Title>
				</Modal>
			)

			await user.click(screen.getByText('Open'))
			expect(screen.getByTestId('title')).toHaveAttribute('data-slot', 'modal-title')
		})
	})

	describe('Modal.Description', () => {
		it('has data-slot attribute', async () => {
			const user = userEvent.setup()
			render(
				<Modal>
					<Modal.Trigger render={<span />}>Open</Modal.Trigger>
					<Modal.Description data-testid="desc">Desc</Modal.Description>
				</Modal>
			)

			await user.click(screen.getByText('Open'))
			expect(screen.getByTestId('desc')).toHaveAttribute('data-slot', 'modal-description')
		})
	})

	describe('Modal.Footer', () => {
		it('renders footer with data-slot', async () => {
			const user = userEvent.setup()
			render(
				<Modal>
					<Modal.Trigger render={<span />}>Open</Modal.Trigger>
					<Modal.Footer data-testid="footer">
						<button>Cancel</button>
						<button>Confirm</button>
					</Modal.Footer>
				</Modal>
			)

			await user.click(screen.getByText('Open'))
			expect(screen.getByTestId('footer')).toHaveAttribute('data-slot', 'modal-footer')
			expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
			expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument()
		})
	})

	describe('controlled mode', () => {
		it('renders when open is true', () => {
			render(
				<Modal open>
					<Modal.Title>Controlled</Modal.Title>
				</Modal>
			)
			expect(screen.getByText('Controlled')).toBeInTheDocument()
		})

		it('calls onOpenChange when closing', async () => {
			const user = userEvent.setup()
			const onOpenChange = vi.fn()
			render(
				<Modal showClose open onOpenChange={onOpenChange}>
					<Modal.Title>Controlled</Modal.Title>
				</Modal>
			)

			await user.click(screen.getByRole('button', { name: 'Close' }))
			expect(onOpenChange).toHaveBeenCalledWith(false, expect.anything())
		})
	})
})
