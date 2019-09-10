import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
import Label from "./Label";
class InputField extends React.Component {
    render() {
        let borderRadius;
        if (this.props.rounded) {
            borderRadius = "18px";
        }
        else {
            borderRadius = "3px";
        }
        const style = {
            paddingLeft: "10px",
            fontSize: "18px",
            width: this.props.width,
            height: this.props.height,
            borderRadius: borderRadius,
            border: "1px solid rgb(150,150,150)",
            color: "rgb(100,100,100)",
            outline: "none",
        }
        return (<Label position={this.props.position} label={this.props.label}><input {...this.props} onChange={(event)=>this.props.onChange(event.target.value)} style={style} /></Label>);
    }
}
InputField.defaultProps = {
    width: basic.size.width,
    height: basic.size.height,
    type: "text"
};
InputField.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    type: PropTypes.oneOf(["text", "number", "password", "checkbox", "swipe", "date", "radio", "range", "hour"]),
};

export default InputField;