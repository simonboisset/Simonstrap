import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";
class Input extends React.Component {
    constructor(){
        super();
        this.refInput = React.createRef();
        this.state = {
            display:false,
            active:"null",
            timer:Date.now(),
            class:""
        }
    }
    render() {
    let borderRadius;
    if (this.props.rounded) {
        borderRadius="18px";
    }
    else{
        borderRadius="3px";
    }
    const style={
        margin:"10px",
        paddingLeft:"10px",
        width: this.props.width,
        height:this.props.height,
        borderRadius:borderRadius,
        border:"1px solid rgb(150,150,150)",
        color:"rgb(100,100,100)",
        outline: "none",
    }
    if (this.props.type==="file") {
        return(
          <div>
            <input ref={input => this.refInput = input} style={{display: 'none'}} type="file" onChange={console.log("coucou")}/>
            <Button style={style} onClick={()=>this.refInput.click()}>{this.props.label}</Button>
          </div>
        );
    }
    else {
        return(<input style={style}/>);
    }
  }
}
Input.defaultProps = {
    height:"50px",
    width:"250px",

};
Input.propTypes = {
    height:PropTypes.string,
    width:PropTypes.string
};

export default Input;