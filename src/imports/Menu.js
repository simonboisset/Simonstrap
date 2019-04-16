import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
class Menu extends React.Component {
    constructor() {
        super();
        this.refContainer = React.createRef();
        this.state = {
            click: false,
            hover: false,
        }
    }
    // componentDidMount() {
    //     if (window.innerWidth - this.refContainer.current.getBoundingClientRect().left < 150) {
    //         this.setState({ class: "right" });
    //     }
    // }
    render() {
        let right, opacity, marginTop, marginLeft, visibility;
        if (this.state.hover) {
            visibility = "visible";
            right = "auto";
            opacity = "1";
            marginTop = "0";
            marginLeft = "0";
        }
        else {
            visibility = "hidden";
            right = "auto";
            opacity = "0";
            marginTop = "25px";
            marginLeft = "25px";
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
                right: right,
                width: this.props.width,
                borderRadius: this.props.rounded ? this.props.theme.borderRadius.rounded : this.props.theme.borderRadius.default,
                boxShadow: this.props.theme.elevation[2],
                opacity: opacity,
                marginTop: marginTop,
                marginLeft: marginLeft,
                visibility: visibility,
                transition: `
                    opacity ${this.props.theme.transition.delay},
                    visibility ${this.props.theme.transition.delay},
                    margin-left ${this.props.theme.transition.delay},
                    margin-top ${this.props.theme.transition.delay}
                `,
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
                <div style={style.itemBox}>{this.props.children}</div>
            </div>
        );
    }
}
Menu.defaultProps = {
    width: '130px',
    height: '25px',
    color: "primary",
    theme: basic,
};
Menu.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    label: PropTypes.string,
    color: PropTypes.string,
    theme: PropTypes.object
};

export default Menu;