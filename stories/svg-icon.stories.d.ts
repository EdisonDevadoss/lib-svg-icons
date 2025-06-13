import { StoryObj } from '@storybook/web-components-vite';
import { SvgIcon } from '../components/atoms/svg-icon';
declare const meta: {
    title: string;
    tags: string[];
    component: string;
    argTypes: {
        name: {
            control: "select";
            options: string[];
            description: string;
            defaultValue: string;
        };
        size: {
            control: "number";
            description: string;
            defaultValue: string;
        };
        color: {
            control: "color";
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
type Story = StoryObj<SvgIcon>;
export declare const Default: Story;
export declare const Large: Story;
export declare const Rotated: Story;
export declare const Disabled: Story;
