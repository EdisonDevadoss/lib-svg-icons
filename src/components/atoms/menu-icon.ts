import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconBase } from '../base/icon-base';
import menuSvg from '../../assets/menu.svg?raw';

@customElement('menu-icon')
export class MenuIcon extends IconBase {
  render() {
    return html`
      <span 
        class=${this.getBaseClasses()}
        title=${this.title}
        ?disabled=${this.disabled}
      >${menuSvg}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'menu-icon': MenuIcon;
  }
} 