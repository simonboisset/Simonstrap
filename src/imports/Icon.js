import styled from "styled-components";
import React, { Component } from 'react';

const IconContainer = styled.i`
  margin:0;
`;

export default class Icon extends Component {
  render() {
    return (
      <IconContainer
        {...this.props}
        className='material-icons'
      >
      {this.props.children}
      </IconContainer>

    )
  }
}
