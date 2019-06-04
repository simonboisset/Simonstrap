import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
import InputField from "./InputField";
import InputRange from "./InputRange";
import InputFile from "./InputFile";
import InputSwipe from "./InputSwipe";
import InputSelect from "./InputSelect";
import InputDate from "./InputDate";
import InputHour from "./InputHour";
import Label from "./Label";
import InputCheckbox from './InputCheckbox';
import InputChecklist from './InputChecklist';
import InputRadioList from './InputRadioList';
class Input extends React.Component {
    render() {
        switch (this.props.type) {
            case "file": return (<InputFile {...this.props} />);
            case "checkbox": return (<InputCheckbox {...this.props} />);
            case "checklist": return (<InputChecklist {...this.props} />);
            case "swipe": return (<InputSwipe {...this.props} />);
            case "date": return (<input {...this.props} />);
            case "hour": return (<input {...this.props} />);
            case "radio": return <InputRadioList {...this.props} />;
            case "select": return <InputSelect {...this.props} />;
            case "range": return (<InputRange {...this.props} />);
            default: return (<InputField {...this.props} />);
        }
    }
}
Input.defaultProps = {
    type: "text"
};
Input.propTypes = {
    type: PropTypes.oneOf(["file","select", "text", "number", "password", "checkbox", "checklist", "swipe", "date", "radio", "range", "hour"]),
};

export default Input;