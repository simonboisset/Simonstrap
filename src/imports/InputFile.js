import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "../index";
class InputFile extends React.Component {
    constructor() {
        super();
        this.refInput = React.createRef();
    }
    render() {
        return (
            <div>
                <input ref={input => this.refInput = input} style={{ display: 'none' }} type="file" onChange={this.props.onChange} />
                <Button onClick={() => this.refInput.click()}>{this.props.label}</Button>
            </div>
        );

    }
}
InputFile.propTypes = {
    label: PropTypes.string,
};

export default InputFile;