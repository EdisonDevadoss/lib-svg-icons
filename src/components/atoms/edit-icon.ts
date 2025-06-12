import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { IconBase } from '../base/icon-base';
import editSvg from '../../assets/edit.svg?raw';

@customElement('edit-icon')
export class EditIcon extends IconBase {
  render() {
    return html`
      <span 
        class=${this.getBaseClasses()}
        title=${this.title}
        ?disabled=${this.disabled}
      >${editSvg}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'edit-icon': EditIcon;
  }
} 