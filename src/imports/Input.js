import React from 'react';
import PropTypes from 'prop-types';
import {Div,Button,Icon} from "../index";
import { basic } from "../themes/basic";
class Input extends React.Component {
    constructor() {
        super();
        this.refInput = React.createRef();
        this.state = {
            display: false,
            active: "null",
            timer: Date.now(),
            class: "",
            value:""
        }
    }
    render() {
        let borderRadius;
        if (this.props.rounded) {
            borderRadius = "18px";
        }
        else {
            borderRadius = "3px";
        }
        const style = {
            input: {
                margin: "10px",
                paddingLeft: "10px",
                fontSize: "18px",
                width: this.props.width,
                height: this.props.height,
                borderRadius: borderRadius,
                border: "1px solid rgb(150,150,150)",
                color: "rgb(100,100,100)",
                outline: "none",
            },
            label:{
                display:"flex",
                flexDirection:"row"
            },
            checkbox: {
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                fontSize:"13px",
                borderRadius:"3px",
                width:"20px",
                height:"20px",
                backgroundColor:"white",
                color:"white",
                border:"solid blue 1px"
            }
        }
        switch (this.props.type) {
            case "file":
                {
                    return (
                        <div>
                            <input ref={input => this.refInput = input} style={{ display: 'none' }} type="file" onChange={this.props.onChange} />
                            <Button onClick={() => this.refInput.click()}>{this.props.label}</Button>
                        </div>
                    );
                }
            case "checkbox":
                {
                    return (
                        <label style={style.label}>
                            <input type="checkbox" value={this.state.value} onChange={(event)=>{
                                this.setState({value:!this.state.value})
                                console.log(event.target.value)}}/>
                            <div style={style.checkbox} {...this.props}><Icon style={{fontSize:"15px"}}>done</Icon></div>
                            {this.props.label}
                        </label>
                    );
                }
            case "swipe":
                {
                    return (
                        <label>
                            <input type="checkbox" />
                            {this.props.label}
                        </label>
                    );
                }
            case "date":
                {
                    return (
                        <input {...this.props} />
                    );
                }
            case "hour":
                {
                    return (
                        <input {...this.props} />
                    );
                }
            case "radio":
                {
                    return (
                        <label>
                            <input {...this.props} />
                            {this.props.label}
                        </label>
                    );
                }
            case "range":
                {
                    return (
                        <label>
                            <input {...this.props} />
                            {this.props.label}
                        </label>
                    );
                }
            default:
                {
                    return (<input {...this.props} style={style.input} />);
                }
        }
    }
}
Input.defaultProps = {
    width: basic.size.width,
    height: basic.size.height,

};
Input.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string
};

export default Input;