import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Select } from './select'

describe('Select', () => {
	describe('Select (root)', () => {
		it('renders trigger with placeholder', () => {
			render(
				<Select>
					<Select.Item value="a">Option A</Select.Item>
				</Select>
			)
			expect(screen.getByRole('combobox')).toBeInTheDocument()
		})

		it('has data-slot on trigger', () => {
			render(
				<Select>
					<Select.Item value="a">A</Select.Item>
				</Select>
			)
			expect(screen.getByRole('combobox')).toHaveAttribute('data-slot', 'select-trigger')
		})

		it('renders custom placeholder', () => {
			render(
				<Select placeholder="Choose one">
					<Select.Item value="a">A</Select.Item>
				</Select>
			)
			expect(screen.getByText('Choose one')).toBeInTheDocument()
		})

		it('opens popup on click', async () => {
			const user = userEvent.setup()
			render(
				<Select>
					<Select.Item value="a">Option A</Select.Item>
					<Select.Item value="b">Option B</Select.Item>
				</Select>
			)

			await user.click(screen.getByRole('combobox'))
			expect(screen.getByRole('listbox')).toBeInTheDocument()
			expect(screen.getByRole('option', { name: 'Option A' })).toBeInTheDocument()
			expect(screen.getByRole('option', { name: 'Option B' })).toBeInTheDocument()
		})

		it('selects an item on click', async () => {
			const user = userEvent.setup()
			render(
				<Select>
					<Select.Item value="Option A">Option A</Select.Item>
					<Select.Item value="Option B">Option B</Select.Item>
				</Select>
			)

			await user.click(screen.getByRole('combobox'))
			await user.click(screen.getByRole('option', { name: 'Option A' }))

			expect(screen.getByRole('combobox')).toHaveTextContent('Option A')
		})
	})

	describe('Select.Item', () => {
		it('has data-slot attribute when popup is open', async () => {
			const user = userEvent.setup()
			render(
				<Select>
					<Select.Item value="a">A</Select.Item>
				</Select>
			)

			await user.click(screen.getByRole('combobox'))
			expect(screen.getByRole('option')).toHaveAttribute('data-slot', 'select-item')
		})
	})
})
