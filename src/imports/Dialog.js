import React from 'react';
import PropTypes from 'prop-types';
import {basic} from "../themes/basic";
class Dialog extends React.Component {
  render() {
    let visibility,opacity,top;
    if (this.props.active) {
      visibility= "visible";
      opacity="1";
      top="30%";
    }
    else {
      visibility= "hidden";
      opacity="0";
      top="100%";
    }
    const style = {
      background:{
        position : "fixed",
        top : "0",
        left : "0",
        right : "0",
        bottom : "0",
        display: "flex",
        alignItems : "center",
        justifyContent : "center",
        backgroundColor : "rgba(0,0,0,0.4)",
        zIndex : "997",
        visibility : visibility,
        transition: `visibility ${this.props.delay} linear`,
      },
      trigger:{
        position : "fixed",
        top :"0",
        left :"0",
        right :"0",
        bottom :"0",
        backgroundColor :"rgba(0,0,0,0.1)",
        zIndex :"998",
        opacity : opacity,
        transition: `opacity ${this.props.delay} linear`,
      },
      box:{
        position : "fixed",
        top:top,
        width :this.props.width,
        height :this.props.height,
        backgroundColor :"white",
        zIndex :"999",
        transition : `top ${this.props.delay} linear`,
        borderRadius: this.props.theme.borderRadius.default,
        boxShadow:this.props.theme.elevation[this.props.elevation]
      }
    }
    return(
      <div style={style.background}>
        <div style={style.trigger} onClick={this.props.onClose}/>
        <div style={style.box}>{this.props.children}</div>
      </div>
    );
  }
}
Dialog.defaultProps = {
  width:"350px",
  height:"200px",
  delay: "300ms",
  theme:basic,
  elevation:2
};
Dialog.propTypes = {
  width:PropTypes.string,
  height:PropTypes.string,
  delay: PropTypes.string,
  active: PropTypes.bool,
  onClose: PropTypes.func,
  theme:PropTypes.object,
  elevation:PropTypes.number
};

export default Dialog;