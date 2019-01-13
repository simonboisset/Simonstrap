import React, { Component } from 'react';
import styled from "styled-components";
const Background = styled.div`
  position : fixed;
  top : 0;
  left : 0;
  right : 0;
  bottom : 0;
  display: flex;
  align-items : center;
  justify-content : center;
  background-color : rgba(0,0,0,0.4);
  z-index : 997;
  visibility : hidden;
  transition: visibility ${props =>props.theme.menu.item.time} linear;
  &.active{
    visibility : visible;
  }
`;
const CloseTriger = styled.div`
  position : fixed;
  top :0;
  left :0;
  right :0;
  bottom :0;
  background-color :rgba(0,0,0,0.4);
  z-index :998;
  opacity : 0;
  transition: opacity ${props =>props.theme.menu.item.time} linear;
  &.active{
    opacity : 1;
  }
`;
const DrawerBox = styled.div`
  position : fixed;
  top:100%;
  width :100px;
  height :100px;
  background-color :white;
  z-index :999;
  transition : top ${props =>props.theme.menu.item.time} linear;
  &.active{
    top : 30%;
  }
`;
export default class Dialog extends Component {
  renderClassName=()=>{
    if (this.props.open) {
      return "active";
    }else {
      return "hidden"
    }
  }
  render() {
    return(
      <Background className={this.renderClassName()}>
      <CloseTriger className={this.renderClassName()} onClick={this.props.onClose}/>
      <DrawerBox className={this.renderClassName()}>{this.props.children}</DrawerBox>
      </Background>
    );
  }
}
