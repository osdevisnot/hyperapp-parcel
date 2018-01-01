import './index.css';
import { h, app } from 'hyperapp';

const state = {
  count: 0
};

const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 })
};

const view = (state, actions) => (
  <main class="wrapper">
    <h1 class="title">{state.count}</h1>
    <div class="actions">
      <button onclick={actions.down} class="down">
        -
      </button>
      <button onclick={actions.up} class="up">
        +
      </button>
    </div>
  </main>
);

export const main = app(state, actions, view, document.body);
