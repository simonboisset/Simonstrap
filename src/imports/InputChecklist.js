import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
import Menu from "./Menu";
import Label from "./Label";
import Item from "./Item";
import InputCheckbox from "./InputCheckbox";
class InputChecklist extends React.Component {
    constructor() {
        super();
        this.state = {
            value: []
        }
    }
    handlChange = (index,value) => {
        let list=this.state.value;
        if (value) {
            list.push(this.props.inputList[index].label)
        }
        else{
            list = list.filter(state => state !== this.props.inputList[index].label)
        }
        this.setState({value:list})
        this.props.onChange(list)
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
        return (
            <div style={{ margin: "10px", display: "flex", flexDirection: "column" }}>
                <div style={{ margin: "10px" }}>{this.props.label}</div>
                <Menu style={style} trigger="Focus" label="Select" position="Left">
                    {this.props.inputList.map((input, index) =>
                        <Item key={index}><InputCheckbox style={{ width: "100%", height: "100%" }} onChange={(value)=>this.handlChange(index,value)} label={input.label} /></Item>
                    )}
                </Menu>
            </div>
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