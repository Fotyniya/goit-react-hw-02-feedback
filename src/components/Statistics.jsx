import { Section } from "./Section"
import { Notification } from "./Notification"

export const Statistics = ({good,neutral,bad,total,positivePercentage}) => {
    return (total > 0) ? 
     <Section title={"Statistics"}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
    </Section> : <Notification message = {"There is no feedback"}/>
}