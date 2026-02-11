import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, Field } from '@dgstihler/components'

const meta = {
	title: 'Components/Checkbox Group',
	component: Checkbox.Group,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	argTypes: {
		inLine: { control: 'boolean' },
		justOne: { control: 'boolean' },
		readOnly: { control: 'boolean' },
		disabled: { control: 'boolean' },
		rounded: { control: 'boolean' },
		strikethrough: { control: 'boolean' },
	},
} satisfies Meta<typeof Checkbox.Group>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { defaultValue: ['a'] },
	render: (args) => (
		<Checkbox.Group {...args}>
			<Checkbox value="a">Option A</Checkbox>
			<Checkbox value="b">Option B</Checkbox>
			<Checkbox value="c">Option C</Checkbox>
		</Checkbox.Group>
	),
}

export const Inline: Story = {
	args: { inLine: true, defaultValue: ['a'] },
	render: (args) => (
		<Checkbox.Group {...args}>
			<Checkbox value="a">Option A</Checkbox>
			<Checkbox value="b">Option B</Checkbox>
			<Checkbox value="c">Option C</Checkbox>
		</Checkbox.Group>
	),
}

export const JustOne: Story = {
	args: { justOne: true, defaultValue: ['b'] },
	render: (args) => (
		<Checkbox.Group {...args}>
			<Checkbox value="a">Option A</Checkbox>
			<Checkbox value="b">Option B</Checkbox>
			<Checkbox value="c">Option C</Checkbox>
		</Checkbox.Group>
	),
}

export const ReadOnly: Story = {
	args: { readOnly: true, defaultValue: ['a', 'c'] },
	render: (args) => (
		<Checkbox.Group {...args}>
			<Checkbox value="a">Option A</Checkbox>
			<Checkbox value="b">Option B</Checkbox>
			<Checkbox value="c">Option C</Checkbox>
		</Checkbox.Group>
	),
}

export const RoundedStrikethrough: Story = {
	args: { rounded: true, strikethrough: true, defaultValue: ['b'] },
	render: (args) => (
		<Checkbox.Group {...args}>
			<Checkbox value="a">Option A</Checkbox>
			<Checkbox value="b">Option B</Checkbox>
			<Checkbox value="c">Option C</Checkbox>
		</Checkbox.Group>
	),
}

export const AllHintCategories: Story = {
	render: () => (
		<div className="flex flex-col gap-6 w-72">
			<Field>
				<Field.Label>Default</Field.Label>
				<Checkbox.Group defaultValue={['a']}>
					<Checkbox value="a">Option A</Checkbox>
					<Checkbox value="b">Option B</Checkbox>
				</Checkbox.Group>
				<Field.Hint>Default hint</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Danger</Field.Label>
				<Checkbox.Group>
					<Checkbox value="a">Option A</Checkbox>
					<Checkbox value="b">Option B</Checkbox>
				</Checkbox.Group>
				<Field.Hint category="danger">Error message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Warning</Field.Label>
				<Checkbox.Group>
					<Checkbox value="a">Option A</Checkbox>
					<Checkbox value="b">Option B</Checkbox>
				</Checkbox.Group>
				<Field.Hint category="warning">Warning message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Info</Field.Label>
				<Checkbox.Group>
					<Checkbox value="a">Option A</Checkbox>
					<Checkbox value="b">Option B</Checkbox>
				</Checkbox.Group>
				<Field.Hint category="info">Info message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Success</Field.Label>
				<Checkbox.Group>
					<Checkbox value="a">Option A</Checkbox>
					<Checkbox value="b">Option B</Checkbox>
				</Checkbox.Group>
				<Field.Hint category="success">Success message</Field.Hint>
			</Field>
		</div>
	),
}
