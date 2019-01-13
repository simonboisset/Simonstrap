import React, { Component } from 'react';
import styled from "styled-components";
import EventEmitter from 'events';
const Background = styled.div`
  position : fixed;
  background-color : rgba(0,0,0,0);
  z-index : 993;
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
  z-index :994;
  background-color :rgba(0,0,0,0.4);
  opacity : 0;
  transition: opacity ${props =>props.theme.menu.item.time} linear;
  &.active{
    opacity : 1;
  }
`;
const DrawerBox = styled.div`
  position : fixed;
  top :0;
  left : -${props =>props.width ? props.width : props.theme.drawer.width}px;
  bottom :0;
  width :${props =>props.width ? props.width : props.theme.drawer.width}px;
  background-color :white;
  z-index :995;
  transition : left ${props =>props.theme.menu.item.time} linear;
  &.active{
    left : 0;
  }
`;
export default class Drawer extends Component {
  constructor(){
    super();
    this.state = {
      open:false
    }
  }
  componentDidMount(){
    this.props.toogleEvent.toogleEvent.on('clic', ()=>{
      this.setState({open:!this.state.open});
    });
  }
  renderClassName=()=>{
    if (this.state.open) {
      return "active";
    }else {
      return "hidden"
    }
  }
  render() {
    return(
      <Background className={this.renderClassName()}>
        <CloseTriger className={this.renderClassName()} onClick={()=>this.props.toogleEvent.trig()}/>
        <DrawerBox className={this.renderClassName()}>{this.props.children}</DrawerBox>
      </Background>
    );
  }
}
export function ToogleDrawer(){
  this.toogleEvent=new EventEmitter();
  this.trig=function(){
    this.toogleEvent.emit('clic');
  };
}
