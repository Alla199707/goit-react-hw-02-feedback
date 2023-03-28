import React, { Component } from 'react';
import Section from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static defaultProps = {};

  static propTypes = {};

  render() {
    const names = Object.keys(this.state);
    console.log(names);
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={names} />
        </Section>
        <Section title={'Statistic'}></Section>
      </div>
    );
  }
}
