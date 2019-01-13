import styled from "styled-components";
import React from 'react';
import {Button} from './Button';
const InputText = styled.input`
  margin:10px;
  padding-left:10px;
  width: ${props => props.width ? props.width : props.theme.button.width}px;
  height:${props => props.height ? props.height : props.theme.button.height}px;
  border-radius:${props => props.rounded ? "18px" : "3px"};
  border:1px solid rgb(150,150,150);
  color:rgb(100,100,100);
  &:focus{
    outline: none;
  }
`;
const InputFile = styled.input``;
export default class Input extends React.Component {
  constructor(){
    super();
    this.refInput = React.createRef();
    this.state = {
      display:false,
      active:"null",
      timer:Date.now(),
      class:""
    }
  }
  render() {
    if (this.props.type==="file") {
      return(
        <div>
          <InputFile ref={input => this.refInput = input} style={{display: 'none'}} {...this.props}/>
          <Button {...this.props} onClick={()=>this.refInput.click()}>{this.props.label}</Button>
        </div>
      );
    }else {
      return(<InputText {...this.props}/>);
    }
  }
}
