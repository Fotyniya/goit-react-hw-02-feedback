import PropTypes from 'prop-types';
import { Button, Container } from "../FeedbackOptions/FeedbackOptions.styled"

export const FeedbackOptions = ({options,onLeaveFeedback}) => {
    return <Container>
            {options.map(( option, index ) => 
            <Button key={index} type="button" onClick = {() => onLeaveFeedback(option)}>{option}</Button>
            )}
        </Container>
};

FeedbackOptions.propTypes = {
    options: PropTypes.shape().isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};