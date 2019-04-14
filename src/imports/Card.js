import React from 'react';
import PropTypes from 'prop-types';
class Card extends React.Component {
  constructor(){
    super();
    this.state = {
      click:false,
      hover:false
    }
  }
  render() {
    let borderRadius,flexDirection;
    if (this.props.rounded) {
        borderRadius="18px";
    }
    else{
        borderRadius="3px";
    }
    if (this.props.row) {
        flexDirection='row';
    }
    else{
        flexDirection="column";
    }
    const style={
        margin:"10px",
        width: this.props.width,
        height: this.props.height,
        margin: this.props.margin,
        display:"flex",
        border: "none",
        borderRadius:borderRadius,
        flexDirection: flexDirection,
        justifyContent: this.props.justify,
        alignItems: this.props.align,
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',     
    }
    return (<div style={style}>{this.props.children}</div>);
  }
}
Card.defaultProps = {
    width:"500px",
    height:"300px",
    margin:"25px",
};
Card.propTypes = {
    width:PropTypes.string,
    height:PropTypes.string,
    margin:PropTypes.string,
    row:PropTypes.bool,
    rounded:PropTypes.bool,
};

export default Card;