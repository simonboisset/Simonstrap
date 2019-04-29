import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
class Image extends React.Component {
  render() {
    // console.log(this.props.src);
    
    let borderRadius;
    if (this.props.rounded) {
      borderRadius = "18px";
    }
    else {
      borderRadius = "3px";
    }
    const style = {
      width: this.props.width,
      height: this.props.height,
      overflow: "hidden",
      borderRadius: borderRadius,
      boxShadow: this.props.theme.elevation[this.props.elevation],
      borderWidth: "0",
      outline: "none",
      backgroundImage:`url(${this.props.src})`,
      backgroundSize: 'cover',
      backgroundPosition: "center",
    }
    return (<div style={style}  />);
  }
}
Image.defaultProps = {
  height: "auto",
  width: "auto",
  theme: basic,
  elevation: 0
};
Image.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  theme: PropTypes.object,
  elevation: PropTypes.number
};

export default Image;