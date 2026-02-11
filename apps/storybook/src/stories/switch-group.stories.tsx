import type { Meta, StoryObj } from '@storybook/react'
import { Switch, Field } from '@dgstihler/components'

const meta = {
	title: 'Components/Switch Group',
	component: Switch.Group,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	argTypes: {
		inLine: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		disabled: { control: 'boolean' },
		size: {
			control: 'select',
			options: ['small', 'medium'],
		},
	},
} satisfies Meta<typeof Switch.Group>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { defaultValue: ['notifications'] },
	render: (args) => (
		<Switch.Group {...args}>
			<Switch value="notifications">Notifications</Switch>
			<Switch value="sound">Sound</Switch>
			<Switch value="vibration">Vibration</Switch>
		</Switch.Group>
	),
}

export const Inline: Story = {
	args: { inLine: true, defaultValue: ['notifications'] },
	render: (args) => (
		<Switch.Group {...args}>
			<Switch value="notifications">Notifications</Switch>
			<Switch value="sound">Sound</Switch>
			<Switch value="vibration">Vibration</Switch>
		</Switch.Group>
	),
}

export const JustOne: Story = {
	args: { justOne: true, defaultValue: ['notifications'] },
	render: (args) => (
		<Switch.Group {...args}>
			<Switch value="notifications">Notifications</Switch>
			<Switch value="sound">Sound</Switch>
			<Switch value="vibration">Vibration</Switch>
		</Switch.Group>
	),
}

export const ReadOnly: Story = {
	args: { readOnly: true, defaultValue: ['notifications', 'vibration'] },
	render: (args) => (
		<Switch.Group {...args}>
			<Switch value="notifications">Notifications</Switch>
			<Switch value="sound">Sound</Switch>
			<Switch value="vibration">Vibration</Switch>
		</Switch.Group>
	),
}

export const AllHintCategories: Story = {
	render: () => (
		<div className="flex flex-col gap-6 w-72">
			<Field>
				<Field.Label>Default</Field.Label>
				<Switch.Group defaultValue={['a']}>
					<Switch value="a">Option A</Switch>
					<Switch value="b">Option B</Switch>
				</Switch.Group>
				<Field.Hint>Default hint</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Danger</Field.Label>
				<Switch.Group>
					<Switch value="a">Option A</Switch>
					<Switch value="b">Option B</Switch>
				</Switch.Group>
				<Field.Hint category="danger">Error message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Warning</Field.Label>
				<Switch.Group>
					<Switch value="a">Option A</Switch>
					<Switch value="b">Option B</Switch>
				</Switch.Group>
				<Field.Hint category="warning">Warning message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Info</Field.Label>
				<Switch.Group>
					<Switch value="a">Option A</Switch>
					<Switch value="b">Option B</Switch>
				</Switch.Group>
				<Field.Hint category="info">Info message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Success</Field.Label>
				<Switch.Group>
					<Switch value="a">Option A</Switch>
					<Switch value="b">Option B</Switch>
				</Switch.Group>
				<Field.Hint category="success">Success message</Field.Hint>
			</Field>
		</div>
	),
}
