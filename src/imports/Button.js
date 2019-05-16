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
  render() {
    let backgroundColor, elevation;
    if (this.state.click) {
      // backgroundColor = this.props.theme.color.primary.light;
      elevation = this.props.elevation;
    }
    else {
      if (this.state.hover) {
        // backgroundColor = this.props.theme.color.primary.light;
        elevation = this.props.elevation + 1;
      }
      else {
        // backgroundColor = this.props.theme.color.primary.regular;
        elevation = this.props.elevation;
      }
    }
    if (this.props.theme.color.hasOwnProperty(this.props.color)) {
      backgroundColor = this.props.theme.color[this.props.color].regular;
    }
    else {
      backgroundColor = this.props.color;
    }
    let style;
    switch (this.props.type) {
      case "contained": {
        style = {
          margin: "10px",
          fontSize: "18px",
          width: this.props.width,
          height: this.props.height,
          color: "white",
          border: "none",
          borderRadius: this.props.rounded ? this.props.theme.borderRadius.rounded : this.props.theme.borderRadius.default,
          backgroundColor: backgroundColor,
          outline: "none",
          transition: "background-color 300ms, box-shadow 300ms",
          boxShadow: this.props.theme.elevation[elevation]
        }
        break;
      }
      case "flat": {
        style = {
          margin: "10px",
          fontSize: "18px",
          width: this.props.width,
          height: this.props.height,
          color: "white",
          border: "none",
          borderRadius: this.props.rounded ? this.props.theme.borderRadius.rounded : this.props.theme.borderRadius.default,
          backgroundColor: backgroundColor,
          outline: "none",
          transition: "background-color 300ms, box-shadow 300ms",
          boxShadow: this.props.theme.elevation[elevation]
        }
        break;
      }
      case "rounded": {
        style = {
          margin: "10px",
          fontSize: "18px",
          width: this.props.width,
          height: this.props.height,
          color: "white",
          border: "none",
          borderRadius: this.props.theme.borderRadius.rounded,
          backgroundColor: backgroundColor,
          outline: "none",
          transition: "background-color 300ms, box-shadow 300ms",
          boxShadow: this.props.theme.elevation[elevation]
        }
        break;
      }
      case "icon": {
        style = {
          margin: "10px",
          fontSize: "20px",
          width: "40px",
          height: "40px",
          color: "white",
          border: "none",
          borderRadius: "20px",
          backgroundColor: backgroundColor,
          outline: "none",
          transition: "background-color 300ms, box-shadow 300ms",
          boxShadow: this.props.theme.elevation[elevation],
          fontFamily: "Material Icons",
          textTransform: "none",
          letterSpacing: "normal",
          wordWrap: "normal",
          whiteSpace: "nowrap",
        }
        break;
      }
      default: {
        style = {
          margin: "10px",
          fontSize: "18px",
          width: this.props.width,
          height: this.props.height,
          color: "white",
          border: "none",
          borderRadius: this.props.rounded ? this.props.theme.borderRadius.rounded : this.props.theme.borderRadius.default,
          backgroundColor: backgroundColor,
          outline: "none",
          transition: "background-color 300ms, box-shadow 300ms",
          boxShadow: this.props.theme.elevation[elevation]
        }
        break;
      }

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
  elevation: 2
};
Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  theme: PropTypes.object,
  elevation: PropTypes.number,
  type: PropTypes.oneOf(["contained", "flat", "rounded", "icon"]),
};

export default Button;