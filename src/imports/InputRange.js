import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "../index";
import { basic } from "../themes/basic";
import Label from "./Label";
import "./slider.css";
class InputRange extends React.Component {
    constructor() {
        super();
        this.state = {
            value: false
        }
    }
    render() {
        let border, opacity;
        if (this.state.value === true) {
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
            <Label label={this.props.label}>
                <input
                    className="slider"
                    {...this.props}
                    onChange={(event) => this.setState({ value: event.target.value })}
                />
            </Label>
        );
    }
}

export default InputRange;