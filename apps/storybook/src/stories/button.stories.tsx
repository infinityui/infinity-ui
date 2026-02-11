import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@dgstihler/components';
import { Bookmark } from 'lucide-react';

const meta = {
  title: 'Components/Button',
  component: Button.Solid,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button.Solid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: { children: 'Button', size: 'medium' },
  render: (args) => <Button.Solid {...args} />,
};

export const Outline: Story = {
  args: { children: 'Button', size: 'medium' },
  render: (args) => <Button.Outline {...args} />,
};

export const Ghost: Story = {
  args: { children: 'Button', size: 'medium' },
  render: (args) => <Button.Ghost {...args} />,
};

export const IconSolid: Story = {
  args: {
    children: <Bookmark />,
    size: 'medium',
    rounded: false,
  },
  argTypes: { rounded: { control: 'boolean' } },
  render: (args) => <Button.Icon.Solid aria-label="Bookmark" {...args} />,
};

export const IconOutline: Story = {
  args: {
    children: <Bookmark />,
    size: 'medium',
    rounded: false,
  },
  argTypes: { rounded: { control: 'boolean' } },
  render: (args) => <Button.Icon.Outline aria-label="Bookmark" {...args} />,
};

export const IconGhost: Story = {
  args: { children: <Bookmark />, size: 'medium' },
  argTypes: { rounded: { control: 'boolean' } },
  render: (args) => <Button.Icon.Ghost aria-label="Bookmark" {...args} />,
};
