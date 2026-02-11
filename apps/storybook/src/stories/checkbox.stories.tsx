import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, Field } from '@dgstihler/components'

const meta = {
	title: 'Components/Checkbox',
	component: Checkbox,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	argTypes: {
		rounded: { control: 'boolean' },
		strikethrough: { control: 'boolean' },
		disabled: { control: 'boolean' },
	},
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { children: 'Name me' },
}

export const Checked: Story = {
	args: { children: 'Name me', defaultChecked: true },
}

export const Indeterminate: Story = {
	args: { children: 'Name me', indeterminate: true },
}

export const Rounded: Story = {
	args: { children: 'Name me', rounded: true },
}

export const Strikethrough: Story = {
	args: { children: 'Name me', strikethrough: true, defaultChecked: true },
}

export const Disabled: Story = {
	args: { children: 'Name me', disabled: true },
}

export const AllHintCategories: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			<Field>
				<Checkbox defaultChecked>Option A</Checkbox>
				<Field.Hint>Default hint</Field.Hint>
			</Field>
			<Field>
				<Checkbox>Option B</Checkbox>
				<Field.Hint category="danger">Error message</Field.Hint>
			</Field>
			<Field>
				<Checkbox>Option C</Checkbox>
				<Field.Hint category="warning">Warning message</Field.Hint>
			</Field>
			<Field>
				<Checkbox>Option D</Checkbox>
				<Field.Hint category="info">Info message</Field.Hint>
			</Field>
			<Field>
				<Checkbox defaultChecked>Option E</Checkbox>
				<Field.Hint category="success">Success message</Field.Hint>
			</Field>
		</div>
	),
}
