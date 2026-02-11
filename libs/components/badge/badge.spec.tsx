import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Badge } from './badge'

describe('Badge', () => {
	describe('Badge (root)', () => {
		it('renders children', () => {
			render(<Badge>Status</Badge>)
			expect(screen.getByText('Status')).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Badge data-testid="badge">Tag</Badge>)
			expect(screen.getByTestId('badge')).toHaveAttribute('data-slot', 'badge')
		})

		it('renders as a span element', () => {
			render(<Badge data-testid="badge">Tag</Badge>)
			expect(screen.getByTestId('badge').tagName).toBe('SPAN')
		})

		it('merges custom className', () => {
			render(<Badge className="custom" data-testid="badge">Tag</Badge>)
			expect(screen.getByTestId('badge')).toHaveClass('custom')
		})

		it.each([
			'default', 'info', 'success', 'warning', 'danger', 'accent', 'outline',
		] as const)('accepts category=%s', (category) => {
			render(<Badge category={category} data-testid="badge">Tag</Badge>)
			expect(screen.getByTestId('badge')).toBeInTheDocument()
		})
	})

	describe('Badge.Icon', () => {
		it('renders children', () => {
			render(<Badge.Icon data-testid="icon">🔔</Badge.Icon>)
			expect(screen.getByTestId('icon')).toHaveTextContent('🔔')
		})

		it('has data-slot attribute', () => {
			render(<Badge.Icon data-testid="icon">🔔</Badge.Icon>)
			expect(screen.getByTestId('icon')).toHaveAttribute('data-slot', 'badge-icon')
		})
	})

	describe('Badge.Label', () => {
		it('renders label text', () => {
			render(<Badge.Label>New</Badge.Label>)
			expect(screen.getByText('New')).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Badge.Label data-testid="label">New</Badge.Label>)
			expect(screen.getByTestId('label')).toHaveAttribute('data-slot', 'badge-label')
		})
	})

	describe('Badge.Close', () => {
		it('renders a close button', () => {
			render(<Badge.Close onClose={vi.fn()} />)
			expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Badge.Close onClose={vi.fn()} data-testid="close" />)
			expect(screen.getByTestId('close')).toHaveAttribute('data-slot', 'badge-close')
		})

		it('calls onClose when clicked', async () => {
			const user = userEvent.setup()
			const onClose = vi.fn()
			render(<Badge.Close onClose={onClose} />)

			await user.click(screen.getByRole('button', { name: 'Remove' }))
			expect(onClose).toHaveBeenCalledTimes(1)
		})
	})

	describe('composition', () => {
		it('renders full badge composition', () => {
			const onClose = vi.fn()
			render(
				<Badge category="success" data-testid="badge">
					<Badge.Icon>✓</Badge.Icon>
					<Badge.Label>Approved</Badge.Label>
					<Badge.Close onClose={onClose} />
				</Badge>
			)
			expect(screen.getByTestId('badge')).toBeInTheDocument()
			expect(screen.getByText('✓')).toBeInTheDocument()
			expect(screen.getByText('Approved')).toBeInTheDocument()
			expect(screen.getByRole('button', { name: 'Remove' })).toBeInTheDocument()
		})
	})
})
