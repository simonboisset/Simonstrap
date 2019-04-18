import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
class Menu extends React.Component {
    constructor() {
        super();
        this.refContainer = React.createRef();
        this.refItem = React.createRef();
        this.state = {
            click: false,
            hover: false,
            container: {
                bottom: 0,
                top: 0,
                left: 0,
                right: 0
            },
            item: {
                bottom: 0,
                top: 0,
                left: 0,
                right: 0
            }
        }
    }
    componentDidMount() {
        this.setState({
            container: this.refContainer.current.getBoundingClientRect(),
            item: this.refItem.current.getBoundingClientRect()
        });
        console.log(this.refContainer.current.getBoundingClientRect());

        // if (window.innerWidth - this.refContainer.current.getBoundingClientRect().left < 150) {
        //     this.setState({ class: "right" });
        // }
    }
    render() {
        let opacity, margin, visibility, padding;
        let marginMax, marginMin;
        switch (this.props.direction) {
            case "Top": {
                padding = "0px 0px 3px 0px";
                marginMin = `-${this.state.container.height + this.state.item.height}px 0px 0px 0px`;
                marginMax = `-${this.state.container.height + this.state.item.height + 25}px 0px 0px 0px`;
                break;
            }
            case "Bottom": {
                padding = "3px 0px 0px 0px";
                marginMin = `0px 0px 0px 0px`;
                marginMax = "25px 0px 0px 0px";
                break;
            }
            case "Left": {
                padding = "0px 3px 0px 0px";
                marginMin = `-${this.state.container.height}px 0px 0px -${this.state.item.width}px`;
                marginMax = `-${this.state.container.height}px 0px 0px -${this.state.item.width + 25}px`;
                break;
            }
            case "Right": {
                padding = "0px 0px 0px 3px";

                if (this.props.orientation === "Top") {
                    marginMin = `-${this.state.item.height}px 0px 0px ${this.state.container.width}px`;
                    marginMax = `-${this.state.item.height}px 0px 0px ${this.state.container.width + 25}px`;
                }
                else {
                    marginMin = `-${this.state.container.height}px 0px 0px ${this.state.container.width}px`;
                    marginMax = `-${this.state.container.height}px 0px 0px ${this.state.container.width + 25}px`;
                }
                break;
            }
            default:
                padding = "3px 0px 0px 0px";
                marginMin = `0px 0px 0px 0px`;
                marginMax = "25px 0px 0px 0px";
                break;
        }
        if (this.state.hover) {
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
            menuBox: {
                margin: "0",
                height: this.props.height,
                display: "flex",
                padding: this.props.padding,
                alignItems: "center",
                cursor: "default",
            },
            itemBox: {
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
                width: this.props.width,
                borderRadius: this.props.rounded ? this.props.theme.borderRadius.rounded : this.props.theme.borderRadius.default,
                boxShadow: this.props.theme.elevation[2],
                backgroundColor: "white",
                color: "black"
            }

        }
        return (
            <div
                ref={this.refContainer}
                onMouseEnter={() => this.setState({ hover: true })}
                onMouseLeave={() => this.setState({ hover: false, click: false })}
                onMouseUp={() => this.setState({ click: false })}
                onMouseDown={() => this.setState({ click: true })}
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
};
Menu.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    color: PropTypes.string,
    theme: PropTypes.object,
    direction: PropTypes.oneOf(["Top", "Bottom", "Left", "Right"]),
    orientation: PropTypes.oneOf(["Top", "Bottom", "Left", "Right"]),
    trigger: PropTypes.oneOf(["Clic", "Hover"]),
};

export default Menu;