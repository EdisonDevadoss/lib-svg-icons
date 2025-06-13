import { LitElement } from 'lit';
export declare class IconViewer extends LitElement {
    static styles: import('lit').CSSResult[];
    private searchQuery;
    private toastMessage;
    private showToast;
    private get filteredIcons();
    private handleIconClick;
    private showToastMessage;
    private copySvg;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'icon-viewer': IconViewer;
    }
}
