import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js'; 

class calendarWidget extends LitElement {
    static properties = {
      _date: {state: true},
      months: {state: true}
      
       
    };

    static styles = css`
    :host {
        display: block;
        width: 380px;
        height: 225px;
        background-color: forestgreen;
        color: yellow;
        border: 10px solid #000000;
        border-radius: 10px;
        margin-top:10px
    }
    :host input {
        width: 5em;
    }
  `;
  constructor() {
    super();
    this._date = new Date();
    this.months = new Date().getMonth();

  }

  render() {
    return html`
        <h3>Calendar </h3>
        <p>${this._date.getDate()}   /  ${this._date.getMonth()+1}  /  ${this._date.getFullYear()} </p>
         
        <h5>Time</h5>
        ${this._date.getHours()}   :  ${this._date.getMinutes()}   :  ${this._date.getSeconds()}    
        </p>
        `
  }
}

customElements.define('calendar-widget', calendarWidget);
