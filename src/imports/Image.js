import React from 'react';
import PropTypes from 'prop-types';
class Image extends React.Component {
  render() {
    let borderRadius;
    if (this.props.rounded) {
      borderRadius="18px";
    }
    else{
      borderRadius="3px";
    }
    const style={
      width:this.props.width,
      height: this.props.height,
      overflow: "hidden",
      borderRadius:borderRadius,
      boxShadow:"0 1px 4px rgba(0, 0, 0, .6)",
      borderWidth:"0",
      outline:"none",
      backgroundSize: 'cover'
    }
    return (<img style={style} src={this.props.src}/>);
  }
}
Image.defaultProps = {
    height:"150px",
    width:"150px",
};
Image.propTypes = {
    height:PropTypes.string,
    width:PropTypes.string
};

export default Image;