import type { Meta, StoryObj } from '@storybook/web-components-vite';

import { HomeIcon } from '../components/atoms';

const meta = {
  title: 'Example/home-icon',
  tags: ['autodocs'],
  component: 'home-icon',
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
} satisfies Meta<HomeIcon>;

export default meta;

type Story = StoryObj<HomeIcon>;

export const Default: Story = {
  args: {
    size: '24',
    color: 'black',
    stroke: 'none',
    strokeWidth: '0',
    rotation: 0,
    disabled: false,
    title: 'Home Icon'
  }
};

export const Large: Story = {
  args: {
    size: '48',
    color: 'blue',
    title: 'Large Home Icon'
  }
};

export const WithStroke: Story = {
  args: {
    size: '32',
    color: 'green',
    stroke: 'black',
    strokeWidth: '2',
    title: 'Home Icon with Stroke'
  }
};

export const Rotated: Story = {
  args: {
    size: '24',
    color: 'purple',
    rotation: 45,
    title: 'Rotated Home Icon'
  }
};

export const Disabled: Story = {
  args: {
    size: '24',
    color: 'gray',
    disabled: true,
    title: 'Disabled Home Icon'
  }
};
