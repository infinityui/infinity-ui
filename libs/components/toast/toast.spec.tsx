import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Toast } from './toast'

describe('Toast', () => {
	describe('Toast (root)', () => {
		it('renders children', () => {
			render(<Toast>Message</Toast>)
			expect(screen.getByText('Message')).toBeInTheDocument()
		})

		it('has data-slot and role=alert', () => {
			render(<Toast data-testid="toast">Msg</Toast>)
			const toast = screen.getByTestId('toast')
			expect(toast).toHaveAttribute('data-slot', 'toast')
			expect(toast).toHaveAttribute('role', 'alert')
		})

		it('merges custom className', () => {
			render(<Toast className="custom" data-testid="toast">Msg</Toast>)
			expect(screen.getByTestId('toast')).toHaveClass('custom')
		})

		it.each([
			'default', 'info', 'success', 'warning', 'danger',
		] as const)('accepts category=%s', (category) => {
			render(<Toast category={category} data-testid="toast">Msg</Toast>)
			expect(screen.getByTestId('toast')).toBeInTheDocument()
		})
	})

	describe('close button', () => {
		it('renders close button when onClose is provided', () => {
			render(<Toast onClose={vi.fn()}>Msg</Toast>)
			expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
		})

		it('does not render close button without onClose', () => {
			render(<Toast>Msg</Toast>)
			expect(screen.queryByRole('button', { name: 'Close' })).not.toBeInTheDocument()
		})

		it('calls onClose when close button is clicked', async () => {
			const user = userEvent.setup()
			const onClose = vi.fn()
			render(<Toast onClose={onClose}>Msg</Toast>)

			await user.click(screen.getByRole('button', { name: 'Close' }))
			expect(onClose).toHaveBeenCalledTimes(1)
		})
	})

	describe('Toast.Icon', () => {
		it('renders icon content', () => {
			render(<Toast.Icon data-testid="icon">🔔</Toast.Icon>)
			expect(screen.getByTestId('icon')).toHaveTextContent('🔔')
		})

		it('has data-slot attribute', () => {
			render(<Toast.Icon data-testid="icon">🔔</Toast.Icon>)
			expect(screen.getByTestId('icon')).toHaveAttribute('data-slot', 'toast-icon')
		})
	})

	describe('Toast.Label', () => {
		it('renders label text', () => {
			render(<Toast.Label>Success!</Toast.Label>)
			expect(screen.getByText('Success!')).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Toast.Label data-testid="label">Text</Toast.Label>)
			expect(screen.getByTestId('label')).toHaveAttribute('data-slot', 'toast-label')
		})
	})

	describe('composition', () => {
		it('renders full toast composition', () => {
			const onClose = vi.fn()
			render(
				<Toast category="success" onClose={onClose} data-testid="toast">
					<Toast.Icon>✓</Toast.Icon>
					<Toast.Label>File uploaded</Toast.Label>
				</Toast>
			)
			expect(screen.getByTestId('toast')).toBeInTheDocument()
			expect(screen.getByText('✓')).toBeInTheDocument()
			expect(screen.getByText('File uploaded')).toBeInTheDocument()
			expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
		})
	})
})
