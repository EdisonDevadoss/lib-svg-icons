import { IconBase } from '../base/icon-base';
export declare class UserIcon extends IconBase {
    private injectSizeIntoSvg;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'user-icon': UserIcon;
    }
}
