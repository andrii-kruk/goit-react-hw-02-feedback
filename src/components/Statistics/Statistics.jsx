import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';
import { countPositiveFeedbackPercentage, countTotalFeedback } from 'utils';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad } = this.props;
    return (
      <div className={css.statistics_wrapper}>
        <h2 className={css.statistics_title}>Statistics</h2>

        <ul className={css.statistics_information}>
          <li className={css.statistics_item}>
            <p className={css.statistics_item__description}>Good: {good} </p>
          </li>
          <li className={css.statistics_item}>
            <p className={css.statistics_item__description}>
              Neutral: {neutral}
            </p>
          </li>
          <li className={css.statistics_item}>
            <p className={css.statistics_item__description}>Bad: {bad} </p>
          </li>
          <li className={css.statistics_item}>
            <p className={css.statistics_item__description}>
              Total: {countTotalFeedback(this.props)}
            </p>
          </li>
          <li className={css.statistics_item}>
            <p className={css.statistics_item__description}>
              Positive feedback:
              {countPositiveFeedbackPercentage(
                good,
                countTotalFeedback(this.props)
              )}
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
