import React from 'react';
// import PropTypes from 'prop-types';

class Body extends React.Component {
  constructor(){
    super();
    this.state = {
      width:window.innerWidth,
      height:window.innerHeight
    }
  }
  updateDimensions=()=>{
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentDidMount=()=> {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount=()=> {
    window.removeEventListener("resize", this.updateDimensions);
  }
  render() {
    const style={
      margin:"0px",
      width:this.state.width+"px",
      height:this.state.height+"px",
      ...this.props.style
    }
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default Body;