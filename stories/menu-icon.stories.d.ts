import { StoryObj } from '@storybook/web-components-vite';
import { MenuIcon } from '../components/atoms/menu-icon';
declare const meta: {
    title: string;
    tags: string[];
    component: string;
    argTypes: {
        size: {
            control: "text";
            description: string;
            defaultValue: string;
        };
        color: {
            control: "color";
            description: string;
            defaultValue: string;
        };
        stroke: {
            control: "color";
            description: string;
            defaultValue: string;
        };
        strokeWidth: {
            control: "text";
            description: string;
            defaultValue: string;
        };
        rotation: {
            control: {
                type: "range";
                min: number;
                max: number;
                step: number;
            };
            description: string;
            defaultValue: number;
        };
        disabled: {
            control: "boolean";
            description: string;
            defaultValue: boolean;
        };
        title: {
            control: "text";
            description: string;
            defaultValue: string;
        };
    };
};
export default meta;
type Story = StoryObj<MenuIcon>;
export declare const Default: Story;
export declare const Large: Story;
export declare const Disabled: Story;
