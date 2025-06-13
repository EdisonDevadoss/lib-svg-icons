import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { SvgIcon } from '../components/atoms/svg-icon';

const meta = {
  title: 'Components/SvgIcon',
  tags: ['autodocs'],
  component: 'svg-icon',
  argTypes: {
    name: {
      control: 'select',
      options: ['home', 'user', 'menu'],
      description: 'Type of icon to display',
      defaultValue: 'home'
    },
    size: {
      control: 'number',
      description: 'Size of the icon in pixels',
      defaultValue: '24'
    },
    color: {
      control: 'color',
      description: 'Color of the icon',
      defaultValue: 'currentColor'
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
} satisfies Meta<SvgIcon>;

export default meta;

type Story = StoryObj<SvgIcon>;

export const Default: Story = {
  args: {
    name: 'home',
    size: '24',
    color: 'currentColor',
    title: 'Home'
  }
};

export const Large: Story = {
  args: {
    name: 'user',
    size: '48',
    color: 'blue',
    title: 'Large User'
  }
};      

export const Rotated: Story = {
  args: {
    name: 'home',
    size: '24',
    color: 'green',
    rotation: 45,
    title: 'Rotated Home'
  }
};

export const Disabled: Story = {
  args: {
    name: 'user',
    size: '24',
    color: 'gray',
    disabled: true,
    title: 'Disabled User'
  }
}; 