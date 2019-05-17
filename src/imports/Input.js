import React from 'react';
import PropTypes from 'prop-types';
import { Div, Button, Icon } from "../index";
import { basic } from "../themes/basic";
import InputField from "./InputField";
import InputRange from "./InputRange";
import InputFile from "./InputFile";
import InputRadio from "./InputRadio";
import InputSwipe from "./InputSwipe";
import InputSelect from "./InputSelect";
import InputDate from "./InputDate";
import InputHour from "./InputHour";
import Label from "./Label";
import InputCheckbox from './InputCheckbox';
import { EventEmitter } from 'events';
const trigger = new EventEmitter();
class Input extends React.Component {
    render() {
        switch (this.props.type) {
            case "file": return (<InputFile {...this.props} />);
            case "checkbox": return (<InputCheckbox {...this.props} />);
            case "swipe": return (<InputSwipe {...this.props} />);
            case "date": return (<input {...this.props} />);
            case "hour": return (<input {...this.props} />);
            case "radio":
                return (
                    <div>
                        {this.props.inputList.map((input) =>
                            <InputRadio {...this.props} trigger={trigger} label={input.label} onChange={() => trigger.emit('change')} />
                        )}
                    </div>
                );
            case "select":
                return (
                    <div>
                        {this.props.inputList.map((input) =>
                            <InputSelect {...this.props} trigger={trigger} label={input.label} onChange={() => trigger.emit('change')} />
                        )}
                    </div>
                );
            case "range": return (<InputRange {...this.props} />);
            default: return (<InputField {...this.props} />);
        }
    }
}
Input.defaultProps = {
    type: "text"
};
Input.propTypes = {
    type: PropTypes.oneOf(["text", "number", "password", "checkbox", "swipe", "date", "radio", "range", "hour"]),
};

export default Input;