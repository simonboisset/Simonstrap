import React from 'react';
import PropTypes from 'prop-types';
class Footer extends React.Component {
  render() {
    const style={
      display : "flex",
      position :"relative",
      flexDirection : "row",
      justifyContent : "space-between",
      alignItems :"center",
      color : "white",
      height : this.props.height,
      width : "100%",
      zIndex :"990",
      backgroundColor : this.props.background,
    }
    return (<div style={style}>{this.props.children}</div>);
  }
}
Footer.defaultProps = {
    height:"50px",
    background:"orange"
};
Footer.propTypes = {
    height:PropTypes.string,
    background:PropTypes.string
};

export default Footer;