import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'
import tailwindStyles from './tailwind.css?inline'
import { unsafeCSS } from 'lit'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Copy for the read the docs hint.
   */
  @property()
  docsHint = 'Click on the Vite and Lit logos to learn more';

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  static styles = css`${unsafeCSS(tailwindStyles)}`;

  render() {
    return html`
      <div class="max-w-7xl mx-auto p-8 text-center">
        <a href="https://vite.dev" target="_blank" class="inline-block">
          <img src=${viteLogo} class="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank" class="inline-block">
          <img src=${litLogo} class="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#325cffaa]" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="p-8">
        <button
          @click=${this._onClick}
          part="button"
          class="text-4xl bg-amber-400 font-black text-green-900 rounded-lg border border-transparent px-5 py-2.5 text-base font-medium transition-colors hover:border-[#646cff] focus:outline-none focus:ring-4"
        >
          count is ${this.count}
        </button>
      </div>
      <p class="text-gray-500">${this.docsHint}</p>
    `;
  }

  private _onClick() {
    this.count++;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
