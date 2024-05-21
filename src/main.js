import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './components/widget-block.js';
import './components/blog-block.js';
import './components/widget-container.js';
import './components/ad-widget.js';
import './components/login-widget.js';
import './components/task-manager.js';
import './components/anhWidget.js';
import './components/bmi-widget.js';
import './components/calendar-widget.js';
import './components/Timer-widget.js';
import './components/weekly summary-widget.js'

/** 
 * Comp2110TaskManager component constructs the main UI of the application
 */
class Comp2110TaskManager extends LitElement {
  static properties = {
    header: {type: String},
  };

  static styles = css`
    :host {
      min-height: 100vh;   
      font-size: 14pt;
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--comp2110-portal-background-color);
    }

    main {
      display: flex;
      justify-content: space-between;
      background-color:#f2f2f2;
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
    header{
      background-color:#008080;
    }
    h1{
      background-color:#008f8f;
    }
  `;

  constructor() {
    super();
    this.header = 'COMP2110 Task Manager';
  }

  render() {
    //added fourth widget for the fourth person. Anh
    return html`
      <header>
        <h1>${this.header}</h1>
        <login-widget></login-widget>
      </header>

      <main>      
      <task-manager></task-manager>    
        <widget-container header="Widgets">
          <countdown-timer></countdown-timer>
          <calendar-widget></calendar-widget>
          <weekly-summary-widget></weekly-summary-widget>
          <anh-widget></anh-widget>
          <ad-widget></ad-widget>

         

        </widget-container>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('comp2110-task-manager', Comp2110TaskManager);
