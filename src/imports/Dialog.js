import React from 'react';
import PropTypes from 'prop-types';
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
        backgroundColor :"rgba(0,0,0,0.4)",
        zIndex :"998",
        opacity : opacity,
        transition: `opacity ${this.props.delay} linear`,
      },
      box:{
        position : "fixed",
        top:top,
        width :"100px",
        height :"100px",
        backgroundColor :"white",
        zIndex :"999",
        transition : `top ${this.props.delay} linear`,
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
  delay: "300ms"
};
Dialog.propTypes = {
  delay: PropTypes.string,
  active: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Dialog;