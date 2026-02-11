import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Autocomplete } from './autocomplete'

const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

describe('Autocomplete', () => {
	it('renders input with placeholder', () => {
		render(<Autocomplete items={items} placeholder="Search fruits" />)
		expect(screen.getByPlaceholderText('Search fruits')).toBeInTheDocument()
	})

	it('has data-slot on wrapper', () => {
		render(<Autocomplete items={items} />)
		const wrapper = document.querySelector('[data-slot="autocomplete-wrapper"]')
		expect(wrapper).toBeInTheDocument()
	})

	it('uses default placeholder when not specified', () => {
		render(<Autocomplete items={items} />)
		expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
	})

	it('selects an item and fills the input', async () => {
		const user = userEvent.setup()
		render(<Autocomplete items={items} />)

		const input = screen.getByPlaceholderText('Search')
		await user.type(input, 'App')

		const option = screen.getByRole('option', { name: 'Apple' })
		await user.click(option)

		expect(input).toHaveValue('Apple')
	})

	it('shows items when typing matching text', async () => {
		const user = userEvent.setup()
		render(<Autocomplete items={items} />)

		const input = screen.getByPlaceholderText('Search')
		await user.click(input)
		await user.type(input, 'App')

		expect(screen.getByRole('listbox')).toBeInTheDocument()
		expect(screen.getByRole('option', { name: 'Apple' })).toBeInTheDocument()
	})

	it('filters items based on input', async () => {
		const user = userEvent.setup()
		render(<Autocomplete items={items} />)

		const input = screen.getByPlaceholderText('Search')
		await user.click(input)
		await user.type(input, 'ban')

		expect(screen.getByRole('option', { name: 'Banana' })).toBeInTheDocument()
		expect(screen.queryByRole('option', { name: 'Apple' })).not.toBeInTheDocument()
	})

	it('merges custom className', () => {
		render(<Autocomplete items={items} className="custom" />)
		const wrapper = document.querySelector('[data-slot="autocomplete-wrapper"]')
		expect(wrapper).toHaveClass('custom')
	})
})
