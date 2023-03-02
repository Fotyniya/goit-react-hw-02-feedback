import { Component } from "react";
import PropTypes from 'prop-types';
import { Title } from "../Section/Section.styled";

export class Section extends Component {
    render () {   
      return <div>
        <Title>{ this.props.title }</Title>
        { this.props.children }
        </div>
    }
  }

Section.propTypes = {
  title: PropTypes.string.isRequired,
};