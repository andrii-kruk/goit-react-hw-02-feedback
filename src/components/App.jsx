import React, { Component } from 'react';

import css from './App.module.css';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getFeedback = buttonName => {
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };

  render() {
    return (
      <section className={css.feedback_section}>
        <div className={css.feedback_wrapper}>
          <h1 className={css.feedback_title}>Leave your feedback</h1>

          <FeedbackOptions
            keys={Object.keys(this.state)}
            onFeedbackButton={this.getFeedback}
          />

          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
          />
        </div>
      </section>
    );
  }
}
