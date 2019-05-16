import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
class Header extends React.Component {
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
      backgroundColor : this.props.theme.color.primary.regular,
      boxShadow :'0 3px 6px rgba(0,0,0,0.16)'
    }
    return (<div style={style}>{this.props.children}</div>);
  }
}
Header.defaultProps = {
    height:"50px",
    background:"orange",
    theme: basic,
};
Header.propTypes = {
    height:PropTypes.string,
    background:PropTypes.string,
    theme: PropTypes.object,
};

export default Header;