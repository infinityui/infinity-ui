import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Switch } from './switch'

describe('Switch', () => {
	describe('SwitchItem', () => {
		it('renders a switch', () => {
			render(<Switch>Dark mode</Switch>)
			expect(screen.getByRole('switch')).toBeInTheDocument()
			expect(screen.getByText('Dark mode')).toBeInTheDocument()
		})

		it('has data-slot attribute', () => {
			render(<Switch>Label</Switch>)
			expect(screen.getByRole('switch')).toHaveAttribute('data-slot', 'switch-root')
		})

		it('toggles on click', async () => {
			const user = userEvent.setup()
			render(<Switch>Toggle</Switch>)

			const switchEl = screen.getByRole('switch')
			expect(switchEl).toHaveAttribute('data-unchecked', '')

			await user.click(switchEl)
			expect(switchEl).toHaveAttribute('data-checked', '')
		})

		it('renders without label', () => {
			render(<Switch />)
			expect(screen.getByRole('switch')).toBeInTheDocument()
		})
	})

	describe('Switch.Group', () => {
		it('renders group with children', () => {
			render(
				<Switch.Group>
					<Switch value="a">Option A</Switch>
					<Switch value="b">Option B</Switch>
				</Switch.Group>
			)
			expect(screen.getByRole('group')).toBeInTheDocument()
			expect(screen.getAllByRole('switch')).toHaveLength(2)
		})

		it('has data-slot attribute', () => {
			render(
				<Switch.Group>
					<Switch value="a">A</Switch>
				</Switch.Group>
			)
			expect(screen.getByRole('group')).toHaveAttribute('data-slot', 'switch-group')
		})

		it('toggles items in group', async () => {
			const user = userEvent.setup()
			const onChange = vi.fn()
			render(
				<Switch.Group onChange={onChange}>
					<Switch value="a">A</Switch>
					<Switch value="b">B</Switch>
				</Switch.Group>
			)

			await user.click(screen.getAllByRole('switch')[0])
			expect(onChange).toHaveBeenCalledWith(['a'])

			await user.click(screen.getAllByRole('switch')[1])
			expect(onChange).toHaveBeenCalledWith(['a', 'b'])
		})

		it('deselects already selected items', async () => {
			const user = userEvent.setup()
			const onChange = vi.fn()
			render(
				<Switch.Group defaultValue={['a']} onChange={onChange}>
					<Switch value="a">A</Switch>
					<Switch value="b">B</Switch>
				</Switch.Group>
			)

			await user.click(screen.getAllByRole('switch')[0])
			expect(onChange).toHaveBeenCalledWith([])
		})

		it('justOne mode allows only one selection', async () => {
			const user = userEvent.setup()
			const onChange = vi.fn()
			render(
				<Switch.Group justOne onChange={onChange}>
					<Switch value="a">A</Switch>
					<Switch value="b">B</Switch>
				</Switch.Group>
			)

			await user.click(screen.getAllByRole('switch')[0])
			expect(onChange).toHaveBeenCalledWith(['a'])

			await user.click(screen.getAllByRole('switch')[1])
			expect(onChange).toHaveBeenCalledWith(['b'])
		})

		it('disabled group disables all children', () => {
			render(
				<Switch.Group disabled>
					<Switch value="a">A</Switch>
					<Switch value="b">B</Switch>
				</Switch.Group>
			)
			const switches = screen.getAllByRole('switch')
			switches.forEach((s) => expect(s).toHaveAttribute('aria-disabled', 'true'))
		})

		it('controlled value prop', () => {
			render(
				<Switch.Group value={['b']}>
					<Switch value="a">A</Switch>
					<Switch value="b">B</Switch>
				</Switch.Group>
			)
			const [a, b] = screen.getAllByRole('switch')
			expect(a).toHaveAttribute('data-unchecked', '')
			expect(b).toHaveAttribute('data-checked', '')
		})
	})
})
