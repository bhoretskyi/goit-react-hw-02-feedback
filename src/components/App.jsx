import { Component } from 'react';

export class App extends Component {
  static state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <div>
            <button>good</button>
            <button>neutral</button>
            <button>bad</button>
          </div>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>good</p>
          <p>neutral</p>
          <p>neutral</p>
        </div>
      </div>
    );
  }
}
