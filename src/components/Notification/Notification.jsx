import PropTypes from 'prop-types';
import { Component } from "react";
import { Message } from "../Notification/Notification.styled"

export class Notification extends Component {
    render(){
    return <div>
        <Message>{ this.props.message }</Message>
    </div>}
};

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};