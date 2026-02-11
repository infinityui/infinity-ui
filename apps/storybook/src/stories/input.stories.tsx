import type { Meta, StoryObj } from '@storybook/react'
import { Input, Field } from '@dgstihler/components'

const meta = {
	title: 'Components/Input',
	component: Input,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<Field className="w-80">
			<Field.Label>Label</Field.Label>
			<Input placeholder="Lorem ipsum" />
			<Field.Footer>
				<Field.Hint>Hint</Field.Hint>
				<Input.Counter current={0} max={32} />
			</Field.Footer>
		</Field>
	),
}

export const Disabled: Story = {
	render: () => (
		<Field className="w-80">
			<Field.Label>Label</Field.Label>
			<Input placeholder="Disabled input" disabled />
			<Field.Hint>Hint</Field.Hint>
		</Field>
	),
}

export const Small: Story = {
	render: () => (
		<Field className="w-80">
			<Field.Label>Label</Field.Label>
			<Input size="small" placeholder="Small input" />
			<Field.Hint>Hint</Field.Hint>
		</Field>
	),
}

export const AllHintCategories: Story = {
	render: () => (
		<div className="flex flex-col gap-6 w-80">
			<Field>
				<Field.Label>Default</Field.Label>
				<Input placeholder="Lorem ipsum" />
				<Field.Hint>Default hint</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Danger</Field.Label>
				<Input placeholder="Lorem ipsum" />
				<Field.Hint category="danger">Error message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Warning</Field.Label>
				<Input placeholder="Lorem ipsum" />
				<Field.Hint category="warning">Warning message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Info</Field.Label>
				<Input placeholder="Lorem ipsum" />
				<Field.Hint category="info">Info message</Field.Hint>
			</Field>
			<Field>
				<Field.Label>Success</Field.Label>
				<Input placeholder="Lorem ipsum" />
				<Field.Hint category="success">Success message</Field.Hint>
			</Field>
		</div>
	),
}
