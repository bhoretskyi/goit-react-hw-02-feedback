import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleFeedbackClick = e => {
    console.log(this.state);
  };
  render() {
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <div>
            <button type="button" onClick={this.handleFeedbackClick}>
              good
            </button>
            <button>neutral</button>
            <button>bad</button>
          </div>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>good {this.state.good}</p>
          <p>neutral {this.state.neutral}</p>
          <p>neutral {this.state.good}</p>
        </div>
      </div>
    );
  }
}
