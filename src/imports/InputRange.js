import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
import Label from "./Label";
import "./slider.css";
class InputRange extends React.Component {
    render() {
        return (
            <Label label={this.props.label}>
                <input
                    className="slider"
                    {...this.props}
                    onChange={(event)=>this.props.onChange(event.target.value)}
                />
            </Label>
        );
    }
}
export default InputRange;