import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconBase } from '../base/icon-base';
import userSvg from '../../assets/user.svg?raw';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement('user-icon')
export class UserIcon extends IconBase {

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
    return html`
      <span
        class=${this.getBaseClasses()}
        style=${Object.entries(this.getBaseStyles())
          .map(([key, value]) => `${key}: ${value}`)
          .join('; ')}
        title=${this.title}
        ?disabled=${this.disabled}
        >${unsafeHTML(this.injectSizeIntoSvg(userSvg))}</span
      >
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'user-icon': UserIcon;
  }
} 