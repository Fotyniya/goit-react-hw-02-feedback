import PropTypes from 'prop-types';
import { Section } from "../Section/Section"
import { Notification } from "../Notification/Notification"
import { Value } from "../Statistics/Statistics.styled"

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return ( total > 0 ) ? 
     <Section title={"Statistics"}>
        <Value>Good: { good }</Value>
        <Value>Neutral: { neutral }</Value>
        <Value>Bad: { bad }</Value>
        <Value>Total: { total }</Value>
        <Value>Positive feedback: { positivePercentage }%</Value>
    </Section> : <Notification message = {"There is no feedback"}/>
}

Statistics.propTypes = {
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};