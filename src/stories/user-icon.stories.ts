import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { UserIcon } from '../components/atoms/user-icon';

const meta = {
  title: 'Example/user-icon',
  tags: ['autodocs'],
  component: 'user-icon',
  argTypes: {
    size: {
      control: 'text',
      description: 'Size of the icon in pixels',
      defaultValue: '24'
    },
    color: {
      control: 'color',
      description: 'Color of the icon',
      defaultValue: 'black'
    },
    stroke: {
      control: 'color',
      description: 'Stroke color of the icon',
      defaultValue: 'none'
    },
    strokeWidth: {
      control: 'text',
      description: 'Width of the stroke',
      defaultValue: '0'
    },
    rotation: {
      control: { type: 'range', min: 0, max: 360, step: 1 },
      description: 'Rotation angle in degrees',
      defaultValue: 0
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the icon is disabled',
      defaultValue: false
    },
    title: {
      control: 'text',
      description: 'Tooltip text for the icon',
      defaultValue: ''
    }
  }
} satisfies Meta<UserIcon>;

export default meta;

type Story = StoryObj<UserIcon>;

export const Default: Story = {
  args: {
    size: '24',
    color: 'black',
    title: 'User'
  }
};

export const Large: Story = {
  args: {
    size: '48',
    color: 'blue',
    title: 'Large User'
  }
};

export const Disabled: Story = {
  args: {
    size: '24',
    color: 'gray',
    disabled: true,
    title: 'Disabled User'
  }
}; 