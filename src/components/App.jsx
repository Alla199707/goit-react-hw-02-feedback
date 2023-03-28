import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = value => {
    this.setState(prevState => ({ [value]: prevState[value] + 1 }));
  };

  static countTotalFeedback = {};

  static countPositiveFeedbackPercentage = {};

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={'Statistic'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positivePercentage={this.positivePercentage}
          ></Statistics>
        </Section>
      </div>
    );
  }
}
