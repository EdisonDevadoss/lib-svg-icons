import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { IconViewer } from '../components/pages/icon-viewer';

const meta = {
  title: 'Pages/IconViewer',
  tags: ['autodocs'],
  component: 'icon-viewer',
} satisfies Meta<IconViewer>;

export default meta;

type Story = StoryObj<IconViewer>;

export const Default: Story = {
  args: {}
}; 