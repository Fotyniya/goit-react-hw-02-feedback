import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Layout } from "components/Layout";
import { Section } from "./Section/Section";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  countFeedback = (option) =>{
    console.log(option);
    this.setState(prevState => { 
      return {
        [option]: prevState[option] + 1,
      }
    })
  };
 
  onCountTotalFeedback = () => {
    const values = Object.values(this.state); 
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  }

  countPositiveFeedbackPercentage = ()=>{
    return this.onCountTotalFeedback() ? Math.round(this.state.good/this.onCountTotalFeedback()*100) : 0;
  }
  
    render(){
      const { good, neutral, bad } = this.state;
      
      return(
        
      <Layout>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions 
          options={ Object.keys( this.state )}
          onLeaveFeedback = { this.countFeedback }
          />
         </Section>
         <Section title={"Statistics"}> 
          <Statistics 
            good = { good }
            bad = { bad }
            neutral = { neutral }
            total = { this.onCountTotalFeedback() }
            positivePercentage = { this.countPositiveFeedbackPercentage() }
          /> 
          </Section>
      </Layout>
      )
    } 
}