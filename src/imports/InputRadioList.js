import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
import Menu from "./Menu";
import Label from "./Label";
import Item from "./Item";
import InputRadio from "./InputRadio";

import { EventEmitter } from 'events';
const trigger = new EventEmitter();
class InputSelect extends React.Component {
    render() {

        return (
            <div>
                {this.props.inputList.map((input,index) =>
                    <InputRadio key={index} {...this.props} trigger={trigger} label={input.label} onChange={() => {
                        trigger.emit('change');
                        this.props.onChange(input.label)
                    }} />
                )}
            </div>
        );
    }
}
InputSelect.defaultProps = {
    width: basic.size.width,
};
InputSelect.propTypes = {
    width: PropTypes.string,
};
export default InputSelect;