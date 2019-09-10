import React from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";
import { basic } from "../themes/basic";
class Select extends React.Component {
    constructor() {
        super();
        this.refSelect = React.createRef();
        this.state = {
            display: false,
            active: "null",
            timer: Date.now(),
            class: ""
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
            margin: "10px",
            paddingLeft: "10px",
            fontSize: "18px",
            width: this.props.width,
            height: this.props.height,
            borderRadius: borderRadius,
            border: "1px solid rgb(150,150,150)",
            color: "rgb(100,100,100)",
            outline: "none",
        }
        if (this.props.type === "file") {
            return (
                <div>
                    <select ref={select => this.refSelect = select} style={{ display: 'none' }} type="file" onChange={this.props.onChange} />
                    <Button style={style} onClick={() => this.refSelect.click()}>{this.props.label}</Button>
                </div>
            );
        }
        else {
            return (<select {...this.props} style={style} />);
        }
    }
}
Select.defaultProps = {
    width: basic.size.width,
    height: basic.size.height,

};
Select.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string
};

export default Select;