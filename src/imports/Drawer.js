import React from 'react';
import PropTypes from 'prop-types';
class Drawer extends React.Component {
  render() {
    let visibility,opacity,left;
    if (this.props.active) {
      visibility= "visible";
      opacity="1";
      left="0";
    }
    else {
      visibility= "hidden";
      opacity="0";
      left=`-${this.props.width}`;
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
        zIndex : "993",
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
        zIndex :"994",
        opacity : opacity,
        transition: `opacity ${this.props.delay} linear`,
      },
      box:{
        position : "fixed",
        top :"0",
        left : left,
        bottom :"0",
        width :this.props.width,
        backgroundColor :"white",
        zIndex :"995",
        transition : `left ${this.props.delay} linear`,
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
Drawer.defaultProps = {
  delay: "300ms",
  width:"250px"
};
Drawer.propTypes = {
  delay: PropTypes.string,
  active: PropTypes.bool,
  onClose: PropTypes.func,
  width:PropTypes.string
};

export default Drawer;