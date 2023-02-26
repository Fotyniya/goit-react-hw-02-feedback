import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions";
import { Statistics } from "./Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countGoodFeedback = () =>{
    
    this.setState(prevState => { 
      return {
        good: prevState.good + 1,
      }
    })
  };

  countBadFeedback = ()=>{
    this.setState(prevState => { 
      return {
        bad: prevState.bad + 1,
      }
    })
  };

  countNeutralFeedback = ()=>{
    this.setState(prevState => {    
      return {
        neutral: prevState.neutral + 1,
      }
    });
  };
 
  onCountTotalFeedback = () => {
    return this.state.good+this.state.bad+this.state.neutral;
  }
  
  countPositiveFeedbackPercentage = ()=>{
    return this.onCountTotalFeedback() ? Math.round(this.state.good/this.onCountTotalFeedback()*100) : 0;
  }
  
    render(){
      return(
      <div>
          <FeedbackOptions
          onGoodFeedback = {this.countGoodFeedback}
          onNeutralFeedback = {this.countNeutralFeedback}
          onBadFeedback = {this.countBadFeedback}
        />
          <Statistics 
            good = {this.state.good}
            bad = {this.state.bad}
            neutral = {this.state.neutral}
            total = {this.onCountTotalFeedback()}
            positivePercentage = {this.countPositiveFeedbackPercentage()}
          /> 
      </div>
      )
    } 
}