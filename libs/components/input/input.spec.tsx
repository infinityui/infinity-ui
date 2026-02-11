import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Input } from './input'

describe('Input', () => {
	describe('InputText', () => {
		it('renders an input element', () => {
			render(<Input placeholder="Type here" />)
			expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Input data-testid="input" />)
			expect(screen.getByTestId('input')).toHaveAttribute('data-slot', 'input-text')
		})

		it('defaults to type text', () => {
			render(<Input data-testid="input" />)
			expect(screen.getByTestId('input')).toHaveAttribute('type', 'text')
		})

		it('accepts custom type', () => {
			render(<Input type="email" data-testid="input" />)
			expect(screen.getByTestId('input')).toHaveAttribute('type', 'email')
		})

		it('merges custom className', () => {
			render(<Input className="custom" data-testid="input" />)
			expect(screen.getByTestId('input')).toHaveClass('custom')
		})

		it('accepts size variants', () => {
			render(<Input size="small" data-testid="input" />)
			expect(screen.getByTestId('input')).toBeInTheDocument()
		})

		it('passes through native props', () => {
			render(<Input disabled maxLength={100} data-testid="input" />)
			expect(screen.getByTestId('input')).toBeDisabled()
			expect(screen.getByTestId('input')).toHaveAttribute('maxLength', '100')
		})
	})

	describe('Input.Counter', () => {
		it('renders current/max text', () => {
			render(<Input.Counter current={5} max={100} />)
			expect(screen.getByText('5/100')).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Input.Counter current={0} max={50} data-testid="counter" />)
			expect(screen.getByTestId('counter')).toHaveAttribute('data-slot', 'input-counter')
		})

		it('merges custom className', () => {
			render(<Input.Counter current={10} max={20} className="custom" data-testid="counter" />)
			expect(screen.getByTestId('counter')).toHaveClass('custom')
		})
	})
})
