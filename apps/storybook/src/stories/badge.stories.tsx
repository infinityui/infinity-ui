import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '@infinityui/components'
import { Check } from 'lucide-react'

const meta = {
	title: 'Components/Badge',
	component: Badge,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	argTypes: {
		category: {
			control: 'select',
			options: ['default', 'outline', 'success', 'info', 'danger', 'warning', 'neutral'],
		},
	},
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { category: 'default' },
	render: (args) => (
		<Badge {...args}>
			<Badge.Icon><Check /></Badge.Icon>
			<Badge.Label>Badge</Badge.Label>
			<Badge.Close onClose={() => { /* noop */ }} />
		</Badge>
	),
}

export const WithIconAndClose: Story = {
	args: { category: 'default' },
	render: (args) => (
		<Badge {...args}>
			<Badge.Icon><Check /></Badge.Icon>
			<Badge.Label>Badge</Badge.Label>
			<Badge.Close onClose={() => { /* noop */ }} />
		</Badge>
	),
}

export const Outline: Story = {
	args: { category: 'outline' },
	render: (args) => (
		<Badge {...args}>
			<Badge.Icon><Check /></Badge.Icon>
			<Badge.Label>Badge</Badge.Label>
			<Badge.Close onClose={() => { /* noop */ }} />
		</Badge>
	),
}

export const Success: Story = {
	args: { category: 'success' },
	render: (args) => (
		<Badge {...args}>
			<Badge.Icon><Check /></Badge.Icon>
			<Badge.Label>Badge</Badge.Label>
			<Badge.Close onClose={() => { /* noop */ }} />
		</Badge>
	),
}

export const Info: Story = {
	args: { category: 'info' },
	render: (args) => (
		<Badge {...args}>
			<Badge.Icon><Check /></Badge.Icon>
			<Badge.Label>Badge</Badge.Label>
			<Badge.Close onClose={() => { /* noop */ }} />
		</Badge>
	),
}

export const Danger: Story = {
	args: { category: 'danger' },
	render: (args) => (
		<Badge {...args}>
			<Badge.Icon><Check /></Badge.Icon>
			<Badge.Label>Badge</Badge.Label>
			<Badge.Close onClose={() => { /* noop */ }} />
		</Badge>
	),
}

export const Warning: Story = {
	args: { category: 'warning' },
	render: (args) => (
		<Badge {...args}>
			<Badge.Icon><Check /></Badge.Icon>
			<Badge.Label>Badge</Badge.Label>
			<Badge.Close onClose={() => { /* noop */ }} />
		</Badge>
	),
}

export const Neutral: Story = {
	args: { category: 'neutral' },
	render: (args) => (
		<Badge {...args}>
			<Badge.Icon><Check /></Badge.Icon>
			<Badge.Label>Badge</Badge.Label>
			<Badge.Close onClose={() => { /* noop */ }} />
		</Badge>
	),
}

export const AllCategories: Story = {
	render: () => (
		<div className="flex flex-col items-start gap-3">
			<Badge category="outline">
				<Badge.Icon><Check /></Badge.Icon>
				<Badge.Label>Badge</Badge.Label>
				<Badge.Close onClose={() => { /* noop */ }} />
			</Badge>
			<Badge category="default">
				<Badge.Icon><Check /></Badge.Icon>
				<Badge.Label>Badge</Badge.Label>
				<Badge.Close onClose={() => { /* noop */ }} />
			</Badge>
			<Badge category="success">
				<Badge.Icon><Check /></Badge.Icon>
				<Badge.Label>Badge</Badge.Label>
				<Badge.Close onClose={() => { /* noop */ }} />
			</Badge>
			<Badge category="info">
				<Badge.Icon><Check /></Badge.Icon>
				<Badge.Label>Badge</Badge.Label>
				<Badge.Close onClose={() => { /* noop */ }} />
			</Badge>
			<Badge category="danger">
				<Badge.Icon><Check /></Badge.Icon>
				<Badge.Label>Badge</Badge.Label>
				<Badge.Close onClose={() => { /* noop */ }} />
			</Badge>
			<Badge category="warning">
				<Badge.Icon><Check /></Badge.Icon>
				<Badge.Label>Badge</Badge.Label>
				<Badge.Close onClose={() => { /* noop */ }} />
			</Badge>
			<Badge category="neutral">
				<Badge.Icon><Check /></Badge.Icon>
				<Badge.Label>Badge</Badge.Label>
				<Badge.Close onClose={() => { /* noop */ }} />
			</Badge>
		</div>
	),
}
