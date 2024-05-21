import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class WeeklySummaryWidget extends LitElement {
  static properties = {
    _dueDate: {state: true},
    _tasks: {state: true},
    
  };

  static styles = css`
    .container {
      border: 2px solid #1c1a1a;/* Added border */
      border-radius: 5px; /*Added rounded border */
      padding: 50px; /* Added padding */
      width: 300px;
    }
    .weekly-summary {
      border: 2px solid #a31f1f; /* Added border */
      border-radius: 55px; /* Added rounded border */
      padding: 30px; /* Added padding */
    }
    h2 {
      margin-top: 0;
    }
    ul {
      padding-left: 20px;
    }
    .task {
      margin-bottom: 10px;
      padding: 5px;
      border-radius: 3px;
      background-color: #f5f5f5;
    }
    .due-date {
      font-weight: bold;
      margin-right: 10px;
    }
    
  `;

  // Sample  tasks
  tasks = [
    { name: 'Task 1', dueDate: '2024-05-13', status: 'todo' },
    { name: 'Task 2', dueDate: '2024-05-14', status: 'todo' },
    { name: 'Task 3', dueDate: '2024-05-15', status: 'todo' },
    { name: 'Task 4', dueDate: '2024-05-16', status: 'done' }, 
    { name: 'Task 5', dueDate: '2024-05-17', status: 'todo' },
  ];

 
  render() {
    const filteredTasks = this.tasks.filter(task => task.status !== 'done');
    const sortedTasks = filteredTasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    return html`
      <div class="container">
      <div class="weekly-summary"> <!-- Added a rectangle around the weekly summary -->
        <h2>Weekly Summary</h2>
        <ul>
          ${sortedTasks.map(task => html`
            <li class="task">
              <span class="due-date">${task.dueDate}</span>
              ${task.name}
            </li>
          `)}
        </ul>
      </div>
      </div>
    `;
  }
}

customElements.define('weekly-summary-widget', WeeklySummaryWidget);