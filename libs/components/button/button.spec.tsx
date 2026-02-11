import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Button } from './button'

describe('Button', () => {
	describe('Button.Solid', () => {
		it('renders children', () => {
			render(<Button.Solid>Click me</Button.Solid>)
			expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Button.Solid>Solid</Button.Solid>)
			expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'button-solid')
		})

		it('handles click events', async () => {
			const user = userEvent.setup()
			const onClick = vi.fn()
			render(<Button.Solid onClick={onClick}>Click</Button.Solid>)

			await user.click(screen.getByRole('button'))
			expect(onClick).toHaveBeenCalledTimes(1)
		})

		it('is disabled when disabled prop is true', () => {
			render(<Button.Solid disabled>Disabled</Button.Solid>)
			expect(screen.getByRole('button')).toBeDisabled()
		})

		it('does not fire click when disabled', async () => {
			const user = userEvent.setup()
			const onClick = vi.fn()
			render(<Button.Solid disabled onClick={onClick}>No click</Button.Solid>)

			await user.click(screen.getByRole('button'))
			expect(onClick).not.toHaveBeenCalled()
		})
	})

	describe('Button.Outline', () => {
		it('renders with data-slot', () => {
			render(<Button.Outline>Outline</Button.Outline>)
			expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'button-outline')
		})
	})

	describe('Button.Ghost', () => {
		it('renders with data-slot', () => {
			render(<Button.Ghost>Ghost</Button.Ghost>)
			expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'button-ghost')
		})
	})

	describe('Button.Icon.Solid', () => {
		it('renders with aria-label', () => {
			render(<Button.Icon.Solid aria-label="Close">×</Button.Icon.Solid>)
			expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Button.Icon.Solid aria-label="Close">×</Button.Icon.Solid>)
			expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'icon-button-solid')
		})
	})

	describe('Button.Icon.Outline', () => {
		it('renders with data-slot', () => {
			render(<Button.Icon.Outline aria-label="Edit">✎</Button.Icon.Outline>)
			expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'icon-button-outline')
		})
	})

	describe('Button.Icon.Ghost', () => {
		it('renders with data-slot', () => {
			render(<Button.Icon.Ghost aria-label="More">⋯</Button.Icon.Ghost>)
			expect(screen.getByRole('button')).toHaveAttribute('data-slot', 'icon-button-ghost')
		})
	})

	describe('size variants', () => {
		it('accepts small size', () => {
			render(<Button.Solid size="small">Small</Button.Solid>)
			expect(screen.getByRole('button')).toBeInTheDocument()
		})

		it('accepts medium size', () => {
			render(<Button.Solid size="medium">Medium</Button.Solid>)
			expect(screen.getByRole('button')).toBeInTheDocument()
		})

		it('accepts large size', () => {
			render(<Button.Solid size="large">Large</Button.Solid>)
			expect(screen.getByRole('button')).toBeInTheDocument()
		})
	})

	describe('custom className', () => {
		it('merges custom className', () => {
			render(<Button.Solid className="custom-class">Styled</Button.Solid>)
			expect(screen.getByRole('button')).toHaveClass('custom-class')
		})
	})
})
