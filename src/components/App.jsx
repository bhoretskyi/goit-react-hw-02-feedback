import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };
  handleFeedbackClick = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };
  totalFeedbackCalk = () => {
    this.setState(prevState => ({
      total: prevState['total'] + 1,
    }));
  };
  render() {
    const{good,total} = this.state;
    const goodFeedbackCalk = () => {
      return Math.round((good / total) * 100)
    }
    // const { good, neutral, bad } = this.state;
    return (
      <div>
        <div>
          <h1>Please leave feedback</h1>
          <div>
            <button
              type="button"
              onClick={() => {
                this.handleFeedbackClick('good');
                this.totalFeedbackCalk();
              }}
            >
              good
            </button>
            <button
              type="button"
              onClick={() => {
                this.handleFeedbackClick('neutral');
                this.totalFeedbackCalk();
              }}
            >
              neutral
            </button>
            <button
              type="button"
              onClick={() => {
                this.handleFeedbackClick('bad');
                this.totalFeedbackCalk();
              }}
            >
              bad
            </button>
          </div>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>good {this.state.good}</p>
          <p>neutral {this.state.neutral}</p>
          <p>bad {this.state.bad}</p>
          <p>total {this.state.total}</p>
          <p>Positive feedback {goodFeedbackCalk() ? goodFeedbackCalk() : 0}%</p>
        </div>
      </div>
    );
  }
}
