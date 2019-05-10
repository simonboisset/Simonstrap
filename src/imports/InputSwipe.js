import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from "../index";
import { basic } from "../themes/basic";
import Label from "./Label";
class InputSwipe extends React.Component {
    constructor() {
        super();
        this.state = {
            value: false
        }
    }
    render() {
        let  backgroundColor, justifyContent;
        if (this.state.value === true) {
            backgroundColor = "green"
            justifyContent = "flex-start"
        }
        else {
            backgroundColor = "white"
            justifyContent = "flex-end"
        }
        const style = { swipe: {
            display: "flex",
            justifyContent: justifyContent,
            alignItems: "center",
            fontSize: "13px",
            borderRadius: "8px",
            width: "40px",
            height: "15px",
            backgroundColor,
            color: "white",
            border: "solid black 1px",
            transition: "justify-content 300ms linear"
        },
        swipeButton: {
            margin: "2px",
            borderRadius: "6px",
            width: "12px",
            height: "12px",
            backgroundColor: "grey"
        }
    }
    return (
        <Label label={this.props.label} position="Left">
            <input type="checkbox" onChange={(event) => this.setState({ value: event.target.checked })}
                style={{ display: "none" }}
            />
            <div style={style.swipe} {...this.props}><div style={style.swipeButton} /></div>
        </Label>
    );
    }
}

export default InputSwipe;