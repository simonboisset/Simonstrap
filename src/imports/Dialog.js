import React from 'react';
import PropTypes from 'prop-types';
class Dialog extends React.Component {
  render() {
    let className;
    if (this.props.open) {
      className= "active";
    }else {
      className= "hidden";
    }
    const style = {
      background:{
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
      },
      triger:{
        position : "fixed",
        top :"0",
        left :"0",
        right :"0",
        bottom :"0",
        backgroundColor :"rgba(0,0,0,0.4)",
        zIndex :"998",
        opacity : "0,"
        transition: `opacity ${this.props.delay}` linear,
        &.active{
          opacity : 1;
        }
      },
      box:{
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
      }
    }
    return(
      <Background style={style.background} className={className}>
        <CloseTriger style={style.triger} className={className} onClick={this.props.onClose}/>
        <DrawerBox style={style.box} className={className}>{this.props.children}</DrawerBox>
      </Background>
    );
  }
}
Dialog.defaultProps = {
  width: "auto",
  height:"auto",
  margin:"0",
  padding:"0",
  justify:"flex-start",
  align:"flex-start",
  background:"none"
};
Dialog.propTypes = {
  width: PropTypes.string,
  height:PropTypes.string,
  margin:PropTypes.string,
  padding:PropTypes.string,
  justify:PropTypes.string,
  align:PropTypes.string,
  background:PropTypes.string,
  container:PropTypes.string,
  image:PropTypes.string,
  wrap:PropTypes.string,
};

export default Dialog;