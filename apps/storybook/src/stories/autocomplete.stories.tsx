import type { Meta, StoryObj } from '@storybook/react'
import { Autocomplete, Field } from '@dgstihler/components'

const meta = {
	title: 'Components/Autocomplete',
	component: Autocomplete,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium'],
		},
	},
} satisfies Meta<typeof Autocomplete>

export default meta
type Story = StoryObj<typeof meta>

const fruits = ['Apple', 'Banana', 'Orange', 'Grape', 'Mango', 'Pineapple', 'Strawberry', 'Watermelon']

export const Default: Story = {
	args: { items: fruits },
	render: (args) => (
		<Autocomplete {...args} className="w-80" />
	),
}

export const Small: Story = {
	args: { items: fruits, size: 'small' },
	render: (args) => (
		<Autocomplete {...args} className="w-64" />
	),
}

export const WithDefaultValue: Story = {
	args: { items: fruits, defaultValue: 'Banana' },
	render: (args) => (
		<Autocomplete {...args} className="w-80" />
	),
}

export const Disabled: Story = {
	args: { items: fruits, disabled: true },
	render: (args) => (
		<Autocomplete {...args} className="w-80" />
	),
}

export const AllHintCategories: Story = {
	args: { items: fruits },
	render: (args) => (
		<div className="flex flex-col gap-6 w-80">
			<Field>
				<Field.Label>Default</Field.Label>
				<Autocomplete {...args} placeholder="Search fruit" />
				<Field.Hint>Default hint</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Danger</Field.Label>
				<Autocomplete {...args} placeholder="Search fruit" />
				<Field.Hint category="danger">Error message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Warning</Field.Label>
				<Autocomplete {...args} placeholder="Search fruit" />
				<Field.Hint category="warning">Warning message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Info</Field.Label>
				<Autocomplete {...args} placeholder="Search fruit" />
				<Field.Hint category="info">Info message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Success</Field.Label>
				<Autocomplete {...args} placeholder="Search fruit" />
				<Field.Hint category="success">Success message</Field.Hint>
			</Field>
		</div>
	),
}
