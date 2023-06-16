import React, { Component } from 'react';
import { Button } from './FeedbackButton/FeedbackButton';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    const { keys, onFeedbackButton } = this.props;

    return (
      <ul className={css.feedback_options}>
        {keys.map(buttonName => (
          <Button
            key={buttonName}
            onFeedbackButton={() => onFeedbackButton(buttonName)}
            buttonName={buttonName}
          />
        ))}
      </ul>
    );
  }
}
