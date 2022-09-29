// import React, { Component } from 'react';
import { useState } from 'react';

import Section from './Section';
import Notification from './Notification';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import { MainWrapper } from './App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = e => {
    const targetName = e.target.name;

    switch (targetName) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const feedBacks = countTotalFeedback();
    if (!feedBacks) {
      return 0;
    }
    return Number(((good / feedBacks) * 100).toFixed(2));
  };

  const options = { good, neutral, bad };
  const total = countTotalFeedback();
  const positive = countPositiveFeedbackPercentage();

  return (
    <MainWrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleClick} />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </MainWrapper>
  );
}
