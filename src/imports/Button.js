import React from 'react';
import PropTypes from 'prop-types';

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
      backgroundColor = "red"
    }
    else{
      if (this.state.hover) {
        backgroundColor = "blue"
      }
      else{
        backgroundColor = "green"
      }
    }
    
    const style={
      margin:"10px",
      width:this.props.width,
      height:this.props.height,
      color:"white",
      border: "none",
      borderRadius:this.props.rounded ? "18px" : "3px",
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
    width: 'auto',
    height:'auto',
    backgroundColor:"primary"
};
Button.propTypes = {
    width: PropTypes.string,
    height:PropTypes.string,
    backgroundColor:PropTypes.string
};

export default Button;