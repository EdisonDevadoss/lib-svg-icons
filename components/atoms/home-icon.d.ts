import { LitElement } from 'lit';
export declare class HomeIcon extends LitElement {
    size: string;
    color: string;
    stroke: string;
    strokeWidth: string;
    rotation: number;
    disabled: boolean;
    title: string;
    static styles: import('lit').CSSResult;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'home-icon': HomeIcon;
    }
}
