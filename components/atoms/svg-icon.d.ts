import { LitElement } from 'lit';
export declare class SvgIcon extends LitElement {
    name: string;
    size: string;
    color: string;
    rotation: number;
    disabled: boolean;
    title: string;
    static styles: import('lit').CSSResult;
    private injectSizeIntoSvg;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'svg-icon': SvgIcon;
    }
}
