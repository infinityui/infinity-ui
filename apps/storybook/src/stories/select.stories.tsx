import type { Meta, StoryObj } from '@storybook/react'
import { Select, Field } from '@dgstihler/components'

const meta = {
	title: 'Components/Select',
	component: Select,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium'],
		},
	},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: (args) => (
		<Select {...args} className="w-64">
			<Select.Item value="option-1">Option 1</Select.Item>
			<Select.Item value="option-2">Option 2</Select.Item>
			<Select.Item value="option-3">Option 3</Select.Item>
		</Select>
	),
}

export const Small: Story = {
	args: { size: 'small' },
	render: (args) => (
		<Select {...args}>
			<Select.Item value="option-1">Option 1</Select.Item>
			<Select.Item value="option-2">Option 2</Select.Item>
			<Select.Item value="option-3">Option 3</Select.Item>
		</Select>
	),
}

export const WithDefaultValue: Story = {
	args: { defaultValue: 'banana' },
	render: (args) => (
		<Select {...args} className="w-64">
			<Select.Item value="apple">Apple</Select.Item>
			<Select.Item value="banana">Banana</Select.Item>
			<Select.Item value="orange">Orange</Select.Item>
			<Select.Item value="grape">Grape</Select.Item>
			<Select.Item value="mango">Mango</Select.Item>
		</Select>
	),
}

export const Disabled: Story = {
	args: { disabled: true },
	render: (args) => (
		<Select {...args} className="w-64">
			<Select.Item value="option-1">Option 1</Select.Item>
			<Select.Item value="option-2">Option 2</Select.Item>
		</Select>
	),
}

export const DisabledItems: Story = {
	render: (args) => (
		<Select {...args} className="w-64" placeholder="Select a fruit">
			<Select.Item value="apple">Apple</Select.Item>
			<Select.Item value="banana" disabled>Banana</Select.Item>
			<Select.Item value="orange">Orange</Select.Item>
			<Select.Item value="grape" disabled>Grape</Select.Item>
			<Select.Item value="mango">Mango</Select.Item>
		</Select>
	),
}

export const BothSizes: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Select className="w-64" placeholder="Select">
				<Select.Item value="option-1">Option 1</Select.Item>
				<Select.Item value="option-2">Option 2</Select.Item>
				<Select.Item value="option-3">Option 3</Select.Item>
			</Select>
			<Select size="small" placeholder="Select">
				<Select.Item value="option-1">Option 1</Select.Item>
				<Select.Item value="option-2">Option 2</Select.Item>
				<Select.Item value="option-3">Option 3</Select.Item>
			</Select>
		</div>
	),
}

export const AllHintCategories: Story = {
	render: () => (
		<div className="flex flex-col gap-6 w-64">
			<Field>
				<Field.Label>Default</Field.Label>
				<Select placeholder="Select">
					<Select.Item value="a">Option A</Select.Item>
					<Select.Item value="b">Option B</Select.Item>
				</Select>
				<Field.Hint>Default hint</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Danger</Field.Label>
				<Select placeholder="Select">
					<Select.Item value="a">Option A</Select.Item>
					<Select.Item value="b">Option B</Select.Item>
				</Select>
				<Field.Hint category="danger">Error message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Warning</Field.Label>
				<Select placeholder="Select">
					<Select.Item value="a">Option A</Select.Item>
					<Select.Item value="b">Option B</Select.Item>
				</Select>
				<Field.Hint category="warning">Warning message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Info</Field.Label>
				<Select placeholder="Select">
					<Select.Item value="a">Option A</Select.Item>
					<Select.Item value="b">Option B</Select.Item>
				</Select>
				<Field.Hint category="info">Info message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Success</Field.Label>
				<Select placeholder="Select">
					<Select.Item value="a">Option A</Select.Item>
					<Select.Item value="b">Option B</Select.Item>
				</Select>
				<Field.Hint category="success">Success message</Field.Hint>
			</Field>
		</div>
	),
}
