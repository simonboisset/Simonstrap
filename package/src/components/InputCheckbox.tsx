import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "../index";
import { basic } from "../themes/basic";
import Label from "./Label";
class InputCheckbox extends React.Component {
    constructor() {
        super();
        this.state = {
            value: false
        }
    }
    render() {
        let backgroundColor;
        if (this.state.value === true) {
            backgroundColor = "green"
        }
        else {
            backgroundColor = "white"
        }
        const style = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "13px",
            borderRadius: "3px",
            width: "20px",
            height: "20px",
            backgroundColor: backgroundColor,
            color: "white",
            border: "solid green 1px",
            transition: "background-color 300ms"
        }
        return (
            <Label style={this.props.style} label={this.props.label} position="Right">
                <input type="checkbox" onChange={(event) => {this.setState({ value: event.target.checked });
                this.props.onChange(event.target.checked)}}
                    style={{ display: "none" }}
                />
                <div style={style}><Icon style={{ fontSize: "15px" }}>done</Icon></div>
            </Label>
        );
    }
}
export default InputCheckbox;