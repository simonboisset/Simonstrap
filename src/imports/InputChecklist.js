import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
import Menu from "./Menu";
import Item from "./Item";
import InputCheckbox from "./InputCheckbox";
class InputChecklist extends React.Component {
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
            ...this.props.style
        }
        const list = [
            { label: "" },
            ...this.props.inputList
        ]
        return (
            <Menu style={style} trigger="Focus" label={this.props.label} position="Left">
                {this.props.inputList.map((input, index) =>
                    <Item key={index}><InputCheckbox label={input.label} /></Item>
                )}
            </Menu>
        );
    }
}

export default InputChecklist;