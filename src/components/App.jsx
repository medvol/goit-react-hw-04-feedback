import React, { Component } from "react";
import { Panel } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackWrapper } from "./App.styled";

export class App extends Component {
 state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = event => {
    const value = event.currentTarget.textContent;   
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 }
    })
  }

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total,number)=> total+=number, 0)
  }

  countPositiveFeedbackPercentage = (total) => {
    const percentage = Math.round((this.state.good / total)*100);
    return percentage
  }

  render() {
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage(total)
    return (
      <FeedbackWrapper>
          <Panel title="Please leave feedback">
        <FeedbackOptions options={this.state} onLeaveFeedback={ this.onLeaveFeedback}/>
      </Panel>
      <Panel title="Statistics">
          <Statistics good={this.state.good} 
          neutral={this.state.neutral}
           bad={this.state.bad} 
           total={total} 
           positivePercentage={`${positivePercentage}%`}>

           </Statistics>
      </Panel>
      </FeedbackWrapper>
    
    )
  }
};
