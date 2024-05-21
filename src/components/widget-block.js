import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


/**
 * WidgetBlock <widget-block header="Sample Widget">
 * Base example for a widget, used as a placeholder in design for unimplemented
 * widgets
 */
class WidgetBlock extends LitElement {
  static properties = {
    header: {type: String},
  };

  static styles = css`
       :host {
        display: block;
        width: 400px;
        height: 500px;
        background-color: azure;
        border: 1px solid black;
        box-shadow: 0 0 0 1px;
    }
  `;

  constructor() {
    super();
    this.header = 'Widget';
  }

  render() {
    return html`
        <h3>${this.header}</h3>
    `;
  }
}

customElements.define('widget-block', WidgetBlock);
