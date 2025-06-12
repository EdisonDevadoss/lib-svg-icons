import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconBase } from '../base/icon-base';
import userSvg from '../../assets/user.svg?raw';

@customElement('user-icon')
export class UserIcon extends IconBase {
  render() {
    return html`
      <span 
        class=${this.getBaseClasses()}
        title=${this.title}
        ?disabled=${this.disabled}
        .innerHTML=${userSvg}
      ></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'user-icon': UserIcon;
  }
} 