import { LitElement, css } from 'lit';
import { unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import tailwindStyles from '../../tailwind.css?inline';

export class IconBase extends LitElement {
  static styles = css`${unsafeCSS(tailwindStyles)}`;

  @property({ type: String }) size = '24';
  @property({ type: String }) color = 'currentColor';
  @property({ type: String }) stroke = 'transparent';
  @property({ type: String }) strokeWidth = '0';
  @property({ type: Number }) rotation = 0;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) title = '';

  protected getBaseClasses() {
    return classMap({
      'opacity-50 cursor-not-allowed': this.disabled,
      'transition-all duration-200': true,
      [`text-[${this.color}]`]: true,
      [`fill-[${this.color}]`]: true,
      [`stroke-[${this.stroke}]`]: true,
      [`stroke-[${this.strokeWidth}px]`]: true,
      [`transform rotate-[${this.rotation}deg]`]: this.rotation !== 0
    });
  }

  protected getBaseStyles() {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`,
      color: this.color,
      stroke: this.stroke,
      strokeWidth: `${this.strokeWidth}px`,
      transform: `rotate(${this.rotation}deg)`
    };
  }
} 