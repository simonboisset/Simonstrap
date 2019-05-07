import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
class Div extends React.Component {
  constructor(){
    super();
    this.state = {
      click:false,
      hover:false
    }
  }
  render() {
    let wrap,bottom,backgroundImage,backgroundSize,position,flexDirection;
    if(this.props.wrap){
      wrap = "wrap";
    }
    else{
      wrap = "nowrap";
    }
    if(this.props.row){
      flexDirection = "row";
    }
    else{
      flexDirection = "column";
    }
    if(this.props.container){
      position = "absolute";
      bottom="window.innerHeigh";
    }
    else{
      position = "relative";
      bottom="auto";
    }
    if(this.props.image){
      backgroundSize = "cover";
      backgroundImage='url('+props.image+')';
    }
    else{
      backgroundSize = "none";
      backgroundImage="none";
    }
    let fontSize;
    if (["h1","h2","h3","h4","h5","h6"].some((prop)=>prop===this.props.text)) {
      fontSize=this.props.theme.fontSize[this.props.text];
    }
    else{
      fontSize=this.props.text;
    }
    const style={
      display: "flex",
      flexWrap: wrap,
      margin:this.props.margin,
      padding:this.props.padding,
      width: this.props.width,
      height: this.props.height,
      flexDirection: flexDirection,
      position:position,
      bottom: bottom,
      justifyContent:this.props.justify,
      alignItems:this.props.align,
      backgroundColor:this.props.background,
      backgroundImage: backgroundImage,
      backgroundSize: backgroundSize,
      fontSize:fontSize,
      ...this.props.style
    }
    return (<div style={style}>{this.props.children}</div>);
  }
}
Div.defaultProps = {
    width: "auto",
    height:"auto",
    margin:"0",
    padding:"0",
    justify:"flex-start",
    align:"flex-start",
    background:"none",
    theme: basic,
};
Div.propTypes = {
    width: PropTypes.string,
    height:PropTypes.string,
    margin:PropTypes.string,
    padding:PropTypes.string,
    justify:PropTypes.string,
    align:PropTypes.string,
    background:PropTypes.string,
    container:PropTypes.string,
    image:PropTypes.string,
    wrap:PropTypes.string,
    theme: PropTypes.object,
};

export default Div;