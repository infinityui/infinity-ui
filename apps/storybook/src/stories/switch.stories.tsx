import type { Meta, StoryObj } from '@storybook/react'
import { Switch, Field } from '@dgstihler/components'

const meta = {
	title: 'Components/Switch',
	component: Switch,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['small', 'medium'],
		},
		disabled: { control: 'boolean' },
	},
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { children: 'Notifications' },
}

export const Checked: Story = {
	args: { children: 'Notifications', defaultChecked: true },
}

export const Disabled: Story = {
	args: { children: 'Notifications', disabled: true },
}

export const Small: Story = {
	args: { children: 'Compact', size: 'small' },
}

export const AllHintCategories: Story = {
	render: () => (
		<div className="flex flex-col gap-6">
			<Field>
				<Switch defaultChecked>Notifications</Switch>
				<Field.Hint>Default hint</Field.Hint>
			</Field>
			<Field>
				<Switch>Sound</Switch>
				<Field.Hint category="danger">Error message</Field.Hint>
			</Field>
			<Field>
				<Switch>Vibration</Switch>
				<Field.Hint category="warning">Warning message</Field.Hint>
			</Field>
			<Field>
				<Switch>Location</Switch>
				<Field.Hint category="info">Info message</Field.Hint>
			</Field>
			<Field>
				<Switch defaultChecked>Bluetooth</Switch>
				<Field.Hint category="success">Success message</Field.Hint>
			</Field>
		</div>
	),
}
