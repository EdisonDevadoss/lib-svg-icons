import { css, LitElement, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

const homeSvg = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r\n<svg width=\"800px\" height=\"800px\" viewBox=\"0 0 1024 1024\" class=\"icon\"  version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M736.5 231.8c0-61.9 50.4-112.1 112.2-112.1 62 0 112.2 50.3 112.2 112.1v561.1c0 61.9-50.4 112.1-112.2 112.1-62 0-112.2-50.3-112.2-112.1V231.8zM484.1 259.9c0 15.6-1.5 28 14 28 15.6 0 14-12.6 14-28 0-56.1 69-84.1 98.2-84.1 46.5 0 98.2 37.7 98.2 84.1v504.8c0 46.5-51.7 84.1-98.2 84.1-29.2 0-98.2-28-98.2-84.1 0-15.6 1.5-28-14-28-15.6 0-14 12.6-14 28 0 56.1-69 84.1-98.2 84.1s-98.2-28-98.2-84.1c0-15.6 1.5-28-14-28-15.6 0-14 12.6-14 28 0 56.1-69 84.1-98.2 84.1-46.5 0-98.2-37.7-98.2-84.1V259.9c0-46.5 51.7-84.1 98.2-84.1 29.2 0 98.2 28 98.2 84.1 0 15.6-1.5 28 14 28 15.6 0 14-12.6 14-28 0-56.1 69-84.1 98.2-84.1 29.2 0 98.2 28 98.2 84.1z\" fill=\"currentColor\" /><path d=\"M624.3 234.3v555.9c15.2-5.2 28-17.5 28-25.6V259.9c0-8.1-12.8-20.3-28-25.6zM147.5 790.3v-556c-15.2 5.2-28 17.5-28 25.6v504.8c0 8.1 12.8 20.3 28 25.6zM259.7 681.8v-339c-22.6-4.1-41.5-18.4-50.5-41-5.3-13.3-5.8-20.1-5.6-38.6V260c0-8-12.8-20.3-28-25.6v555.9c15.2-5.2 28-17.5 28-25.6v-3.3c-0.2-18.4 0.3-25.2 5.6-38.6 9.1-22.6 27.9-36.8 50.5-41zM287.7 681.8c22.6 4.1 41.5 18.4 50.5 41 5.3 13.3 5.8 20.1 5.6 38.6v3.2c0 8.1 12.8 20.3 28 25.6V234.3c-15.2 5.2-28 17.5-28 25.6v3.3c0.2 18.4-0.3 25.2-5.6 38.6-9 22.6-27.9 36.8-50.5 40.9v339.1zM512.1 681.8c22.6 4.1 41.5 18.4 50.5 41.1 5.3 13.3 5.8 20.1 5.6 38.6v3.2c0 8.1 12.8 20.3 28 25.6v-556c-15.2 5.2-28 17.5-28 25.6v3.3c0.2 18.4-0.3 25.2-5.6 38.6-9 22.6-27.9 36.8-50.5 40.9v339.1zM484.1 681.8v-339c-22.6-4.1-41.5-18.4-50.5-41-5.3-13.3-5.8-20.1-5.6-38.6V260c0-8-12.8-20.3-28-25.6v555.9c15.2-5.2 28-17.5 28-25.6v-3.3c-0.2-18.4 0.3-25.2 5.6-38.6 9-22.6 27.9-36.8 50.5-41zM792.6 231.8v561.1c0 30.8 25.2 56 56.1 56 30.9 0 56.1-25.1 56.1-56V231.8c0-30.8-25.2-56-56.1-56-31 0-56.1 25.1-56.1 56z\" fill=\"#FFFFFF\" /><path d=\"M848.7 736.7c-15.5 0-28-12.6-28-28s12.6-28 28-28c15.5 0 28 12.6 28 28s-12.6 28-28 28zM848.7 624.5c-15.5 0-28-12.6-28-28s12.6-28 28-28c15.5 0 28 12.6 28 28s-12.6 28-28 28zM848.7 512.3c-15.5 0-28-12.6-28-28 0-15.5 12.6-28 28-28 15.5 0 28 12.6 28 28s-12.6 28-28 28zM848.7 344c-15.5 0-28-12.6-28-28 0-15.5 12.6-28 28-28 15.5 0 28 12.6 28 28 0 15.5-12.6 28-28 28z\" fill=\"currentColor\" /></svg>";

const userSvg = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <path d=\"M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg> ";

const menuSvg = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M3 12H21\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <path d=\"M3 6H21\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  <path d=\"M3 18H21\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n</svg> ";

const icons = {
  home: homeSvg,
  user: userSvg,
  menu: menuSvg
};

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let SvgIcon = class extends LitElement {
  constructor() {
    super(...arguments);
    this.name = "";
    this.size = "24";
    this.color = "currentColor";
    this.rotation = 0;
    this.disabled = false;
    this.title = "";
  }
  injectSizeIntoSvg(svg) {
    const svgWithoutSize = svg.replace(
      /\s+(width|height|transform)="[^"]*"/g,
      ""
    );
    const newSvg = svgWithoutSize.replace(
      /<svg([^>]*)>/,
      `<svg$1 width="${this.size}" height="${this.size}" style="transform: inherit;">`
    );
    return newSvg;
  }
  render() {
    const svg = icons[this.name];
    return html`<span
      style="color: ${this.color}; transform: rotate(${this.rotation}deg); opacity: ${this.disabled ? "0.5" : "1"};"
      title=${this.title}
      ?disabled=${this.disabled}
      >${unsafeHTML(this.injectSizeIntoSvg(svg))}</span
    >`;
  }
};
SvgIcon.styles = css`
    :host {
      display: inline-block;
    }
  `;
__decorateClass([
  property({ type: String })
], SvgIcon.prototype, "name", 2);
__decorateClass([
  property({ type: String })
], SvgIcon.prototype, "size", 2);
__decorateClass([
  property({ type: String })
], SvgIcon.prototype, "color", 2);
__decorateClass([
  property({ type: Number })
], SvgIcon.prototype, "rotation", 2);
__decorateClass([
  property({ type: Boolean })
], SvgIcon.prototype, "disabled", 2);
__decorateClass([
  property({ type: String })
], SvgIcon.prototype, "title", 2);
SvgIcon = __decorateClass([
  customElement("svg-icon")
], SvgIcon);

export { SvgIcon };
//# sourceMappingURL=index.es.js.map
