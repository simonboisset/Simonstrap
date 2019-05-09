import React from 'react';
import PropTypes from 'prop-types';
import { Div, Button, Icon } from "../index";
import { basic } from "../themes/basic";
import InputField from "./InputField";
import InputRange from "./InputRange";
import InputFile from "./InputFile";
import InputRadio from "./InputField";
import InputSwipe from "./InputField";
import InputDate from "./InputDate";
import InputHour from "./InputHour";
import Label from "./Label";
class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            display: false,
            active: "null",
            timer: Date.now(),
            class: "",
            value: ""
        }
    }
    render() {
        let borderRadius, backgroundColor, justifyContent;
        if (this.state.value === true) {
            backgroundColor = "green"
            justifyContent = "flex-start"
        }
        else {
            backgroundColor = "white"
            justifyContent = "flex-end"
        }
        if (this.props.rounded) {
            borderRadius = "18px";
        }
        else {
            borderRadius = "3px";
        }
        const style = {
            checkbox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "13px",
                borderRadius: "3px",
                width: "20px",
                height: "20px",
                backgroundColor: backgroundColor,
                color: "white",
                border: "solid green 1px",
                transition: "background-color 300ms"
            }, swipe: {
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
        switch (this.props.type) {
            case "file":return (<InputFile {...this.props}/>);
            case "checkbox":
                {
                    return (
                        <label style={style.label}>
                            <input type="checkbox" onChange={(event) => this.setState({ value: event.target.checked })}
                                style={{ display: "none" }}
                            />
                            <div style={style.checkbox} {...this.props}><Icon style={{ fontSize: "15px" }}>done</Icon></div>
                            {this.props.label}
                        </label>
                    );
                }
            case "swipe":
                {
                    return (
                        <label style={style.label}>
                            <input type="checkbox" onChange={(event) => this.setState({ value: event.target.checked })}
                                style={{ display: "none" }}
                            />
                            <div style={style.swipe} {...this.props}><div style={style.swipeButton} /></div>
                            {this.props.label}
                        </label>
                    );
                }
            case "date":return (<input {...this.props} />);
            case "hour": return (<input {...this.props} />);
            case "radio":
                {
                    return (
                        <label>
                            <input {...this.props} />
                            {this.props.label}
                        </label>
                    );
                }
            case "range":
                {
                    return (
                        <label>
                            <input {...this.props} />
                            {this.props.label}
                        </label>
                    );
                }
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