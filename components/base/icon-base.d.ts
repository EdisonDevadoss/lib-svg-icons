import { LitElement } from 'lit';
export declare class IconBase extends LitElement {
    static styles: import('lit').CSSResult;
    size: string;
    color: string;
    stroke: string;
    strokeWidth: string;
    rotation: number;
    disabled: boolean;
    title: string;
    protected getBaseClasses(): import('lit-html/directive.js').DirectiveResult<typeof import('lit-html/directives/class-map.js').ClassMapDirective>;
    protected getBaseStyles(): {
        width: string;
        height: string;
        color: string;
        stroke: string;
        strokeWidth: string;
        transform: string;
    };
}
