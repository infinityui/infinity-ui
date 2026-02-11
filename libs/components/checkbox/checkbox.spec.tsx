import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Checkbox } from './checkbox'

describe('Checkbox', () => {
	describe('CheckboxItem', () => {
		it('renders a checkbox', () => {
			render(<Checkbox>Accept terms</Checkbox>)
			expect(screen.getByRole('checkbox')).toBeInTheDocument()
			expect(screen.getByText('Accept terms')).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Checkbox>Label</Checkbox>)
			expect(screen.getByRole('checkbox')).toHaveAttribute('data-slot', 'checkbox-root')
		})

		it('toggles on click', async () => {
			const user = userEvent.setup()
			render(<Checkbox>Toggle</Checkbox>)

			const checkbox = screen.getByRole('checkbox')
			expect(checkbox).toHaveAttribute('data-unchecked', '')

			await user.click(checkbox)
			expect(checkbox).toHaveAttribute('data-checked', '')
		})

		it('renders without label', () => {
			render(<Checkbox />)
			expect(screen.getByRole('checkbox')).toBeInTheDocument()
		})
	})

	describe('Checkbox.Group', () => {
		it('renders group with children', () => {
			render(
				<Checkbox.Group>
					<Checkbox value="a">Option A</Checkbox>
					<Checkbox value="b">Option B</Checkbox>
				</Checkbox.Group>
			)
			expect(screen.getByRole('group')).toBeInTheDocument()
			expect(screen.getAllByRole('checkbox')).toHaveLength(2)
		})

		it('has data-slot attribute', () => {
			render(
				<Checkbox.Group>
					<Checkbox value="a">A</Checkbox>
				</Checkbox.Group>
			)
			expect(screen.getByRole('group')).toHaveAttribute('data-slot', 'checkbox-group')
		})

		it('toggles items in group', async () => {
			const user = userEvent.setup()
			const onChange = vi.fn()
			render(
				<Checkbox.Group onChange={onChange}>
					<Checkbox value="a">A</Checkbox>
					<Checkbox value="b">B</Checkbox>
				</Checkbox.Group>
			)

			await user.click(screen.getAllByRole('checkbox')[0])
			expect(onChange).toHaveBeenCalledWith(['a'])

			await user.click(screen.getAllByRole('checkbox')[1])
			expect(onChange).toHaveBeenCalledWith(['a', 'b'])
		})

		it('deselects already selected items', async () => {
			const user = userEvent.setup()
			const onChange = vi.fn()
			render(
				<Checkbox.Group defaultValue={['a']} onChange={onChange}>
					<Checkbox value="a">A</Checkbox>
					<Checkbox value="b">B</Checkbox>
				</Checkbox.Group>
			)

			await user.click(screen.getAllByRole('checkbox')[0])
			expect(onChange).toHaveBeenCalledWith([])
		})

		it('justOne mode allows only one selection', async () => {
			const user = userEvent.setup()
			const onChange = vi.fn()
			render(
				<Checkbox.Group justOne onChange={onChange}>
					<Checkbox value="a">A</Checkbox>
					<Checkbox value="b">B</Checkbox>
				</Checkbox.Group>
			)

			await user.click(screen.getAllByRole('checkbox')[0])
			expect(onChange).toHaveBeenCalledWith(['a'])

			await user.click(screen.getAllByRole('checkbox')[1])
			expect(onChange).toHaveBeenCalledWith(['b'])
		})

		it('disabled group disables all children', () => {
			render(
				<Checkbox.Group disabled>
					<Checkbox value="a">A</Checkbox>
					<Checkbox value="b">B</Checkbox>
				</Checkbox.Group>
			)
			const checkboxes = screen.getAllByRole('checkbox')
			checkboxes.forEach((cb) => expect(cb).toHaveAttribute('aria-disabled', 'true'))
		})

		it('controlled value prop', () => {
			render(
				<Checkbox.Group value={['b']}>
					<Checkbox value="a">A</Checkbox>
					<Checkbox value="b">B</Checkbox>
				</Checkbox.Group>
			)
			const [a, b] = screen.getAllByRole('checkbox')
			expect(a).toHaveAttribute('data-unchecked', '')
			expect(b).toHaveAttribute('data-checked', '')
		})
	})
})
