import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from '@dgstihler/components'
import { Info } from 'lucide-react'

const meta = {
	title: 'Components/Toast',
	component: Toast,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
	argTypes: {
		category: {
			control: 'select',
			options: ['default', 'danger', 'warning', 'info', 'success'],
		},
	},
} satisfies Meta<typeof Toast>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: { category: 'default', onClose: () => {} },
	render: (args) => (
		<Toast {...args}>
			<Toast.Icon><Info /></Toast.Icon>
			<Toast.Label>Added to Saved List</Toast.Label>
		</Toast>
	),
}

export const Danger: Story = {
	args: { category: 'danger', onClose: () => {} },
	render: (args) => (
		<Toast {...args}>
			<Toast.Icon><Info /></Toast.Icon>
			<Toast.Label>Added to Saved List</Toast.Label>
		</Toast>
	),
}

export const Warning: Story = {
	args: { category: 'warning', onClose: () => {} },
	render: (args) => (
		<Toast {...args}>
			<Toast.Icon><Info /></Toast.Icon>
			<Toast.Label>Added to Saved List</Toast.Label>
		</Toast>
	),
}

export const InfoCategory: Story = {
	args: { category: 'info', onClose: () => {} },
	render: (args) => (
		<Toast {...args}>
			<Toast.Icon><Info /></Toast.Icon>
			<Toast.Label>Added to Saved List</Toast.Label>
		</Toast>
	),
}

export const Success: Story = {
	args: { category: 'success', onClose: () => {} },
	render: (args) => (
		<Toast {...args}>
			<Toast.Icon><Info /></Toast.Icon>
			<Toast.Label>Added to Saved List</Toast.Label>
		</Toast>
	),
}

export const AllCategories: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Toast category="default" onClose={() => {}}>
				<Toast.Icon><Info /></Toast.Icon>
				<Toast.Label>Added to Saved List</Toast.Label>
			</Toast>
			<Toast category="danger" onClose={() => {}}>
				<Toast.Icon><Info /></Toast.Icon>
				<Toast.Label>Added to Saved List</Toast.Label>
			</Toast>
			<Toast category="warning" onClose={() => {}}>
				<Toast.Icon><Info /></Toast.Icon>
				<Toast.Label>Added to Saved List</Toast.Label>
			</Toast>
			<Toast category="info" onClose={() => {}}>
				<Toast.Icon><Info /></Toast.Icon>
				<Toast.Label>Added to Saved List</Toast.Label>
			</Toast>
			<Toast category="success" onClose={() => {}}>
				<Toast.Icon><Info /></Toast.Icon>
				<Toast.Label>Added to Saved List</Toast.Label>
			</Toast>
		</div>
	),
}
