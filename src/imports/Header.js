import React from 'react';
import PropTypes from 'prop-types';
class Header extends React.Component {
  constructor(){
    super();
    this.state = {
      click:false,
      hover:false
    }
  }
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
      boxShadow :'0 3px 6px rgba(0,0,0,0.16)'
    }
    return (<div style={style}>{this.props.children}</div>);
  }
}
Header.defaultProps = {
    height:"50px",
    background:"orange"
};
Header.propTypes = {
    height:PropTypes.string,
    background:PropTypes.string
};

export default Header;