import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class CountdownTimer extends LitElement {
  static get properties() {
    return {
      duration: { type: Number },
      timeLeft: { type: Number },
      timerInterval: { type: Object },
      alarmSound: { type: String }
    };
  }

  constructor() {
    super();
    this.duration = 0;
    this.timeLeft = 0;
    this.timerInterval = null;
    this.alarmSound = 'src/components/alarm.mp3'; 
    }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 390px;
        height: 50px;
        border: 5px solid #000000;
        border-radius: 5px;
        margin-top:0
      }
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('duration')) {
      this.timeLeft = this.duration * 60; // Convert minutes to seconds
    }
  }

  startTimer() {
    if (this.duration <= 0) return;

    this.timerInterval = setInterval(() => {
      if (this.timeLeft <= 0) {
        this.playAlarm();
        clearInterval(this.timerInterval);
      } else {
        this.timeLeft--;
      }
    }, 1000); // Update every second
  }

  stopTimer() {
    clearInterval(this.timerInterval);
  }

  playAlarm() {
    const audio = new Audio(this.alarmSound);
    audio.play();
  }

  render() {
    return html`
      <div>
        <input type="number" min="0" step="1" @change="${(e) => this.duration = e.target.value}" placeholder="Enter duration(mins)">
        <button @click="${this.startTimer}">Start</button>
        <button @click="${this.stopTimer}">Stop</button>
      </div>
      <div>Time Left: ${this.formatTime(this.timeLeft)}</div>
    `;
  }

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}

customElements.define('countdown-timer', CountdownTimer);