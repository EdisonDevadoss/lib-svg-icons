import { LitElement, css } from 'lit';
import { unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import tailwindStyles from '../../tailwind.css?inline';

export class IconBase extends LitElement {
  static styles = css`${unsafeCSS(tailwindStyles)}`;

  @property({ type: String }) size = '24';
  @property({ type: String }) color = 'currentColor';
  @property({ type: String }) stroke = 'none';
  @property({ type: String }) strokeWidth = '0';
  @property({ type: Number }) rotation = 0;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) title = '';

  protected getBaseClasses(): string {
    return [
      this.disabled ? 'opacity-50 cursor-not-allowed' : '',
      `w-[${this.size}px] h-[${this.size}px]`,
      `text-[${this.color}]-500`,
      `stroke-[${this.stroke}]`,
      `stroke-[${this.strokeWidth}px]`,
      `rotate-[${this.rotation}deg]`,
      'transition-all duration-200'
    ].filter(Boolean).join(' ');
  }

} 