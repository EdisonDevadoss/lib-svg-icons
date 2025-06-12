import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import homeSvg from '../../assets/home.svg?raw';

@customElement('home-icon')
export class HomeIcon extends LitElement {
  @property({ type: String }) size = '24';
  @property({ type: String }) color = 'black';
  @property({ type: String }) stroke = 'none';
  @property({ type: String }) strokeWidth = '0';
  @property({ type: Number }) rotation = 0;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) title = '';

  static styles = css`
    :host {
      display: inline-block;
    }
    .icon {
      width: var(--size, 24px);
      height: var(--size, 24px);
      color: var(--color, black);
      stroke: var(--stroke, none);
      stroke-width: var(--stroke-width, 0);
      transform: rotate(var(--rotation, 0deg));
      opacity: var(--opacity, 1);
      transition: all 0.2s ease-in-out;
    }
    .icon[title] {
      cursor: help;
    }
  `;

  render() {
    return html`
      <style>
        :host {
          --size: ${this.size}px;
          --color: ${this.color};
          --stroke: ${this.stroke};
          --stroke-width: ${this.strokeWidth};
          --rotation: ${this.rotation}deg;
          --opacity: ${this.disabled ? '0.5' : '1'};
        }
      </style>
      <span 
        class="icon" 
        .innerHTML=${homeSvg}
        title=${this.title}
        ?disabled=${this.disabled}
      ></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'home-icon': HomeIcon;
  }
}

