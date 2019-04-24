import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
class Menu extends React.Component {
    constructor() {
        super();
        this.refContainer = React.createRef();
        this.refItem = React.createRef();
        this.state = {
            focus: false,
            hover: false,
        }
    }
    componentDidMount(){
        this.forceUpdate();
    }
    render() {
        let container,item;
        if (this.refContainer.current && this.refItem.current) {
            container= this.refContainer.current.getBoundingClientRect();
            item= this.refItem.current.getBoundingClientRect();
            // item.width=item.width+5;
        }
        else{
            container= {width:0,height:0}
            item= {width:0,height:0}
        }
        let opacity, margin, visibility, padding;
        let marginMax, marginMin;
        switch (this.props.direction) {
            case "Top": {
                padding = "0px 0px 3px 0px";
                if (this.props.orientation === "Left") {
                    marginMin = `-${container.height + item.height}px 0px 0px ${container.width-item.width}px`;
                    marginMax = `-${container.height + item.height + 25}px 0px 0px ${container.width-item.width}px`;
                }
                else {
                    marginMin = `-${container.height + item.height}px 0px 0px 0px`;
                    marginMax = `-${container.height + item.height + 25}px 0px 0px 0px`;
                }
                break;
            }
            case "Bottom": {
                padding = "3px 0px 0px 0px";
                if (this.props.orientation === "Left") {
                    marginMin = `0px 0px 0px ${container.width-item.width}px`;
                    marginMax = `25px 0px 0px ${container.width-item.width}px`;
                }
                else {
                    marginMin = `0px 0px 0px 0px`;
                    marginMax = `25px 0px 0px 0px`;
                }
                break;
            }
            case "Left": {
                padding = "0px 3px 0px 0px";
                if (this.props.orientation === "Top") {
                    marginMin = `-${item.height}px 0px 0px -${item.width}px`;
                    marginMax = `-${item.height}px 0px 0px -${item.width + 25}px`;
                }
                else {
                    marginMin = `-${container.height}px 0px 0px -${item.width}px`;
                    marginMax = `-${container.height}px 0px 0px -${item.width + 25}px`;
                }
                break;
            }
            case "Right": {
                padding = "0px 0px 0px 3px";

                if (this.props.orientation === "Top") {
                    marginMin = `-${item.height}px 0px 0px ${container.width}px`;
                    marginMax = `-${item.height}px 0px 0px ${container.width + 25}px`;
                }
                else {
                    marginMin = `-${container.height}px 0px 0px ${container.width}px`;
                    marginMax = `-${container.height}px 0px 0px ${container.width + 25}px`;
                }
                break;
            }
            default:
                padding = "3px 0px 0px 0px";
                marginMin = `0px 0px 0px 0px`;
                marginMax = "25px 0px 0px 0px";
                break;
        }
        if ((this.state.hover && this.props.trigger==="Hover") ||(this.state.focus && this.props.trigger==="Focus") ) {
            visibility = "visible";
            opacity = "1";
            margin = marginMin;
        }
        else {
            visibility = "hidden";
            opacity = "0";
            margin = marginMax;
        }
        const style = {
            container: {
                outline: "none",
                border: "none",
            },
            menuBox: {
                margin: "0",
                height: this.props.height,
                display: "flex",
                padding: this.props.padding,
                alignItems: "center",
                cursor: "default",
                outline: "none",
                border: "none",
            },
            itemBox: {
                width: this.props.width,
                position: "absolute",
                opacity: opacity,
                margin: margin,
                visibility: visibility,
                padding: padding,
                transition: `
                    opacity ${this.props.theme.transition.delay},
                    visibility ${this.props.theme.transition.delay},
                    margin-left ${this.props.theme.transition.delay},
                    margin-top ${this.props.theme.transition.delay}
                `,
            },
            item: {
                borderRadius: this.props.rounded ? this.props.theme.borderRadius.rounded : this.props.theme.borderRadius.default,
                boxShadow: this.props.theme.elevation[2],
                backgroundColor: "white",
                color: "black"
            }

        }
        return (
            <div
                tabIndex="0"
                ref={this.refContainer}
                onMouseEnter={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false})}
                onFocus={() => this.setState({ focus: true })}
                onBlur={() => this.setState({ focus: false })}
                style={style.container}
            >
                <div style={style.menuBox} >{this.props.label}</div>
                <div ref={this.refItem} style={style.itemBox}><div style={style.item}>{this.props.children}</div></div>
            </div>
        );
    }
}
Menu.defaultProps = {
    width: basic.size.width,
    height: basic.size.height,
    color: "primary",
    theme: basic,
    direction: "Bottom",
    trigger: "Hover",
    padding:"5px 5px 5px 5px",
};
Menu.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    padding:PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    color: PropTypes.string,
    theme: PropTypes.object,
    direction: PropTypes.oneOf(["Top", "Bottom", "Left", "Right"]),
    orientation: PropTypes.oneOf(["Top", "Bottom", "Left", "Right"]),
    trigger: PropTypes.oneOf(["Focus", "Hover"]),
};

export default Menu;