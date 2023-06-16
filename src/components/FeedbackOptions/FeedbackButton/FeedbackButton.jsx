import React from 'react';

import css from './FeedbackButton.module.css';

export const Button = ({ onFeedbackButton, buttonName }) => {
  const toFirstLetterUpperCase = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <li className={css.feedback_option} key={buttonName}>
      <button
        type="button"
        className={css.option_button}
        onClick={onFeedbackButton}
        name={buttonName}
      >
        {toFirstLetterUpperCase(buttonName)}
      </button>
    </li>
  );
};
