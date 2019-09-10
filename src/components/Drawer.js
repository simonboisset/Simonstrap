import React from 'react';
import PropTypes from 'prop-types';
class Drawer extends React.Component {
  render() {
    let visibility, opacity, left, right, top, bottom, width, height;
    switch (this.props.position) {
      case "Left":
        {
          width=this.props.width;
          height = "auto";
          break;
        }
      case "Right":
        {
          width=this.props.width;
          height = "auto";
          break;
        }
      case "Top":
        {
          width="auto";
          height = this.props.height;
          break;
        }
      case "Bottom":
        {
          width="auto";
          height = this.props.height;
          break;
        }
      default:
        {
          width=this.props.width;
          height = "auto";
          break;
        }
    }
    if (this.props.active) {
      visibility = "visible";
      opacity = "1";
      switch (this.props.position) {
        case "Left":
          {
            left = "0";
            right = "auto";
            top = "0";
            bottom = "0";
            break;
          }
        case "Right":
          {
            left = "auto";
            right = "0";
            top = "0";
            bottom = "0";
            break;
          }
        case "Top":
          {
            left = "0";
            right = "0";
            top = "0";
            bottom = "auto";
            break;
          }
        case "Bottom":
          {
            left = "0";
            right = "0";
            top = "auto";
            bottom = "0";
            break;
          }
        default:
          {
            left = "0";
            right = "auto";
            top = "0";
            bottom = "0";
            break;
          }
      }
    }
    else {
      visibility = "hidden";
      opacity = "0";
      switch (this.props.position) {
        case "Left":
          {
            left = `-${this.props.width}`;
            right = "auto";
            top = "0";
            bottom = "0";
            break;
          }
        case "Right":
          {
            left = "auto";
            right = `-${this.props.width}`;
            top = "0";
            bottom = "0";
            break;
          }
        case "Top":
          {
            left = "0";
            right = "0";
            top = `-${this.props.height}`;
            bottom = "auto";
            break;
          }
        case "Bottom":
          {
            left = "0";
            right = "0";
            top = "auto";
            bottom = `-${this.props.height}`;
            break;
          }
        default:
          {
            left = `-${this.props.width}`;
            right = "auto";
            top = "0";
            bottom = "0";
            break;
          }
      }
    }
    const style = {
      background: {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: "993",
        visibility: visibility,
        transition: `visibility ${this.props.delay} linear`,
      },
      trigger: {
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: "994",
        opacity: opacity,
        transition: `opacity ${this.props.delay} linear`,
      },
      box: {
        position: "fixed",
        width,
        height,
        top,
        left,
        right,
        bottom,
        backgroundColor: "white",
        zIndex: "995",
        transition: `left ${this.props.delay} linear,right ${this.props.delay} linear,bottom ${this.props.delay} linear,top ${this.props.delay} linear`,
      }
    }
    return (
      <div style={style.background}>
        <div style={style.trigger} onClick={this.props.onClose} />
        <div style={style.box}>{this.props.children}</div>
      </div>
    );
  }
}
Drawer.defaultProps = {
  delay: "300ms",
  width: "250px",
  height: "50px",
  position: "Left"
};
Drawer.propTypes = {
  delay: PropTypes.string,
  active: PropTypes.bool,
  onClose: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string,
  position: PropTypes.oneOf(["Top", "Bottom", "Left", "Right"]),
};

export default Drawer;