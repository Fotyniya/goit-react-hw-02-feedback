import PropTypes from 'prop-types';
import { Section } from "../Section/Section"
import { Button, Container } from "../FeedbackOptions/FeedbackOptions.styled"

export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return <Container>
        <Section title={"Please leave feedback"}>
            {options.map(( option, index ) => 
            <Button key={index} type="button" onClick = {() => onLeaveFeedback(option)}>{option}</Button>
            )}
        </Section>  
    </Container>
};

FeedbackOptions.propTypes = {
    options: PropTypes.shape().isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};