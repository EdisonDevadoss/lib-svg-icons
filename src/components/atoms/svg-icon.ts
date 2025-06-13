import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { icons } from '../../config/constants';

@customElement('svg-icon')
export class SvgIcon extends LitElement {
  @property({ type: String }) name: string = '';
  @property({ type: String }) size: string = '24';
  @property({ type: String }) color: string = 'currentColor';
  @property({ type: Number }) rotation: number = 0;
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ type: String }) title: string = '';

  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  private injectSizeIntoSvg(svg: string): string {
    const svgWithoutSize = svg.replace(
      /\s+(width|height|transform)="[^"]*"/g,
      ''
    );

    const newSvg = svgWithoutSize.replace(
      /<svg([^>]*)>/,
      `<svg$1 width="${this.size}" height="${this.size}" style="transform: inherit;">`
    );

    return newSvg;
  }

  render() {
    const svg = icons[this.name as keyof typeof icons];
    return html`<span
      style="color: ${this.color}; transform: rotate(${this.rotation}deg); opacity: ${this
        .disabled
        ? '0.5'
        : '1'};"
      title=${this.title}
      ?disabled=${this.disabled}
      >${unsafeHTML(this.injectSizeIntoSvg(svg))}</span
    >`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'svg-icon': SvgIcon;
  }
}