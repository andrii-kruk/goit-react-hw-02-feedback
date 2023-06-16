import React, { Component } from 'react';
import PropTypes from 'prop-types'

import css from './FeedbackOptions.module.css';
import { Button } from './FeedbackButton/FeedbackButton';

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

FeedbackOptions.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedbackButton: PropTypes.func.isRequired,
};