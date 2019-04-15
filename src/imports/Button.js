import React from 'react';
import PropTypes from 'prop-types';
import {basic} from "../themes/basic";
class Button extends React.Component {
  constructor(){
    super();
    this.state = {
      click:false,
      hover:false
    }
  }
  render() {
    let backgroundColor="";
    if(this.state.click){
      backgroundColor = basic.color.primary.light
    }
    else{
      if (this.state.hover) {
        backgroundColor = basic.color.primary.regular
      }
      else{
        backgroundColor = basic.color.primary.dark
      }
    }
    
    const style={
      margin:"10px",
      width:this.props.width,
      height:this.props.height,
      color:"white",
      border: "none",
      borderRadius:this.props.rounded ? this.props.theme.borderRadius.rounded : this.props.theme.borderRadius.default,
      backgroundColor:backgroundColor,
      outline: "none",
      transition: "background-color 300ms"
    }
    return (
      <button 
        style={style}
        onMouseEnter={()=>this.setState({hover:true})}
        onMouseLeave={()=>this.setState({hover:false,click:false})}
        onMouseUp={()=>this.setState({click:false})}
        onMouseDown={()=>this.setState({click:true})}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    );
  }
}
Button.defaultProps = {
    width: '130px',
    height:'25px',
    backgroundColor:"primary",
    theme:basic
};
Button.propTypes = {
    width: PropTypes.string,
    height:PropTypes.string,
    backgroundColor:PropTypes.string,
    onClick:PropTypes.func,
    children:PropTypes.string,
    theme:PropTypes.object,
};

export default Button;