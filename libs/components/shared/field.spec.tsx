import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Field } from './field'

describe('Field', () => {
	describe('Field (root)', () => {
		it('renders children', () => {
			render(<Field>Content</Field>)
			expect(screen.getByText('Content')).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Field data-testid="field">Content</Field>)
			expect(screen.getByTestId('field')).toHaveAttribute('data-slot', 'field')
		})

		it('merges custom className', () => {
			render(<Field className="custom" data-testid="field">Content</Field>)
			expect(screen.getByTestId('field')).toHaveClass('custom')
		})
	})

	describe('Field.Label', () => {
		it('renders label text', () => {
			render(<Field.Label>Username</Field.Label>)
			expect(screen.getByText('Username')).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Field.Label data-testid="label">Label</Field.Label>)
			expect(screen.getByTestId('label')).toHaveAttribute('data-slot', 'field-label')
		})

		it('renders as a label element', () => {
			render(<Field.Label>Username</Field.Label>)
			expect(screen.getByText('Username').tagName).toBe('LABEL')
		})
	})

	describe('Field.Hint', () => {
		it('renders hint text', () => {
			render(<Field.Hint>Required field</Field.Hint>)
			expect(screen.getByText('Required field')).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Field.Hint data-testid="hint">Hint</Field.Hint>)
			expect(screen.getByTestId('hint')).toHaveAttribute('data-slot', 'field-hint')
		})

		it('renders as a p element', () => {
			render(<Field.Hint>Hint text</Field.Hint>)
			expect(screen.getByText('Hint text').tagName).toBe('P')
		})

		it('accepts category variants', () => {
			render(
				<>
					<Field.Hint category="danger" data-testid="danger">Error</Field.Hint>
					<Field.Hint category="success" data-testid="success">OK</Field.Hint>
					<Field.Hint category="warning" data-testid="warning">Warn</Field.Hint>
				</>
			)
			expect(screen.getByTestId('danger')).toBeInTheDocument()
			expect(screen.getByTestId('success')).toBeInTheDocument()
			expect(screen.getByTestId('warning')).toBeInTheDocument()
		})
	})

	describe('Field.Footer', () => {
		it('renders children', () => {
			render(<Field.Footer>Footer content</Field.Footer>)
			expect(screen.getByText('Footer content')).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Field.Footer data-testid="footer">Footer</Field.Footer>)
			expect(screen.getByTestId('footer')).toHaveAttribute('data-slot', 'field-footer')
		})
	})

	describe('composition', () => {
		it('renders full field composition', () => {
			render(
				<Field data-testid="field">
					<Field.Label>Email</Field.Label>
					<Field.Hint>We will never share your email</Field.Hint>
					<Field.Footer>
						<span>Footer</span>
					</Field.Footer>
				</Field>
			)
			expect(screen.getByTestId('field')).toBeInTheDocument()
			expect(screen.getByText('Email')).toBeInTheDocument()
			expect(screen.getByText('We will never share your email')).toBeInTheDocument()
			expect(screen.getByText('Footer')).toBeInTheDocument()
		})
	})
})
