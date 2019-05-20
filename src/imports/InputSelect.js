import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
import Menu from "./Menu";
import Label from "./Label";
import Item from "./Item";
class InputSelect extends React.Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }
    handleClick = (index) => {
        document.activeElement.blur()
        this.setState({ index: index + 1 });
    }
    render() {

        const style = {
            margin: "10px",
            fontSize: "20px",
            fontWeight: "normal",
            fontStyle: "normal",
            border: "solid black 1px",
            borderRadius: "8px",
            width:basic.size.width,
            ...this.props.style
        }
        const list = [
            { label: "" },
            ...this.props.inputList
        ]
        return (
            <Label label={this.props.label}>
            <Menu style={style} trigger="Focus" label={list[this.state.index].label} position="Left">
                {this.props.inputList.map((input, index) =>
                    <Item key={index} onClick={()=>this.handleClick(index)}>{input.label}</Item>
                )}
            </Menu>
            </Label>
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