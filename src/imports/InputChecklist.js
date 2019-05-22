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
            fontSize: "18px",
            width: this.props.width,
            height: this.props.height,
            borderRadius: "3px",
            border: "1px solid rgb(150,150,150)",
            color: "rgb(100,100,100)",
            ...this.props.style
        }
        const list = [
            { label: "" },
            ...this.props.inputList
        ]
        return (
            <Menu style={style} trigger="Focus" label={this.props.label} position="Left">
                {this.props.inputList.map((input, index) =>
                    <Item key={index}><InputCheckbox style={{width:"100%",height:"100%"}} label={input.label} /></Item>
                )}
            </Menu>
        );
    }
}
InputChecklist.defaultProps = {
    width: basic.size.width,
};
InputChecklist.propTypes = {
    width: PropTypes.string,
};
export default InputChecklist;