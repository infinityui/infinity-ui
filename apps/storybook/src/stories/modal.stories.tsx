import type { Meta, StoryObj } from '@storybook/react'
import { Modal, Button } from '@dgstihler/components'

const meta = {
	title: 'Components/Modal',
	component: Modal,
	parameters: { layout: 'centered' },
	tags: ['autodocs'],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	render: () => (
		<Modal showClose>
			<Modal.Trigger render={<Button.Solid>Open Modal</Button.Solid>} />
			<Modal.Title>Are you sure?</Modal.Title>
			<Modal.Footer>
				<Button.Solid>ok</Button.Solid>
			</Modal.Footer>
		</Modal>
	),
}

export const WithDescription: Story = {
	render: () => (
		<Modal showClose>
			<Modal.Trigger render={<Button.Solid>Delete</Button.Solid>} />
			<Modal.Title>Are you sure?</Modal.Title>
			<Modal.Description>
				This action cannot be undone. This will permanently delete your data.
			</Modal.Description>
			<Modal.Footer>
				<Button.Outline>Cancel</Button.Outline>
				<Button.Solid>Confirm</Button.Solid>
			</Modal.Footer>
		</Modal>
	),
}

export const WithoutClose: Story = {
	render: () => (
		<Modal>
			<Modal.Trigger render={<Button.Outline>Open</Button.Outline>} />
			<Modal.Title>Notice</Modal.Title>
			<Modal.Description>
				You need to accept the terms to continue.
			</Modal.Description>
			<Modal.Footer>
				<Button.Solid>Accept</Button.Solid>
			</Modal.Footer>
		</Modal>
	),
}
