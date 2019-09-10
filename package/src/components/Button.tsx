import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      click: false,
      hover: false
    }
  }
  color() {
    if (this.props.theme.color.hasOwnProperty(this.props.color)) {
      return this.props.theme.color[this.props.color].regular;
    }
    else {
      return this.props.color;
    }
  }
  flatColor(){
    if (this.state.click) {
      return "rgba(0,0,0,0)";
    }
    else {
      if (this.state.hover) {
        return "rgba(0,0,0,0.12)";
      }
      else {
        return "rgba(0,0,0,0)";
      }
    }
    
  }
  elevation() {
    if (this.state.click) {
      return this.props.elevation;
    }
    else {
      if (this.state.hover) {
        return this.props.elevation + 1;
      }
      else {
        return this.props.elevation;
      }
    }
  }
  render() {
    let backgroundColor, elevation, width, height, color, fontFamily, borderRadius;
    switch (this.props.type) {
      case "rounded": {
        width = "150px";
        height = "30px";
        borderRadius = "15px";
        fontFamily = "Roboto";
        break;
      }
      case "icon": {
        width = "40px";
        height = "40px";
        borderRadius = "20px";
        fontFamily = "Material Icons";
        break;
      }
      default: {
        width = "150px";
        height = "30px";
        borderRadius = "3px";
        fontFamily = "Roboto";
        break;
      }
    }
    switch (this.props.variant) {
      case "flat": {
        backgroundColor = this.flatColor();
        color = this.color();
        elevation=0;
        break;
      }
      default: {
        color = "white";
        backgroundColor = this.color();
        elevation=this.elevation();
        break;
      }
    }
    const style = {
      margin: "10px",
      fontSize: "20px",
      fontWeight: "normal",
      fontStyle: "normal",
      width,
      height,
      color,
      border: "none",
      borderRadius,
      backgroundColor,
      outline: "none",
      transition: "background-color 300ms, box-shadow 300ms",
      boxShadow: this.props.theme.elevation[elevation],
      fontFamily,
      ...this.props.style
    }
    return (
      <button
        style={style}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false, click: false })}
        onMouseUp={() => this.setState({ click: false })}
        onMouseDown={() => this.setState({ click: true })}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
Button.defaultProps = {
  width: basic.size.width,
  height: basic.size.height,
  color: "primary",
  theme: basic,
  elevation: 2,
  variant: "default",
  type: "default"
};
Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  theme: PropTypes.object,
  elevation: PropTypes.number,
  variant: PropTypes.oneOf(["contained", "default"]),
  type: PropTypes.oneOf(["default", "rounded", "icon"]),
};

export default Button;