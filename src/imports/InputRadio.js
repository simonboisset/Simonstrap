import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
import Label from "./Label";
class InputRadio extends React.Component {
    constructor() {
        super();
        this.refInput = React.createRef();
    }
    componentDidMount() {
        this.props.trigger.on('change', () => {
            this.forceUpdate();
        });
    }
    render() {
        let border, opacity;
        if (this.refInput.checked) {
            border = "solid green 1px"
            opacity = "1";
        }
        else {
            border = "solid black 1px";
            opacity = "0";
        }
        const style = {
            radio: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "13px",
                borderRadius: "4px",
                width: "8px",
                height: "8px",
                backgroundColor: "white",
                color: "white",
                border,
                transition: "border 300ms linear"
            },
            radioButton: {
                opacity,
                borderRadius: "2px",
                width: "4px",
                height: "4px",
                backgroundColor: "green",
                transition: "opacity 300ms linear"
            }
        }
        return (
            <Label label={this.props.label} position="Left">
                <input
                    ref={input => this.refInput = input}
                    type={this.props.type}
                    name={this.props.name}
                    onChange={()=>this.props.onChange()}
                    style={{ display: "none" }}
                />
                <div style={style.radio} ><div style={style.radioButton} /></div>
            </Label>
        );
    }
}

export default InputRadio;