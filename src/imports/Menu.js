import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
class Menu extends React.Component {
    constructor() {
        super();
        this.refContainer = React.createRef();
        this.state = {
            click: false,
            active: false,
            timer: Date.now()
        }
    }
    componentDidMount() {
        if (window.innerWidth - this.refContainer.current.getBoundingClientRect().left < 150) {
            this.setState({ class: "right" });
        }
    }
    //   toogleMenu = (hover) => {
    //     let timer = Date.now();
    //     this.setState({timer})
    //     setTimeout(()=>{
    //       if (this.state.timer===timer) {
    //         if (hover) {
    //           this.setState({display:true});
    //           setTimeout(()=>{
    //             this.setState({active:"active"});
    //           },50)
    //         }else {
    //           this.setState({active:"passive"});
    //           setTimeout(()=>{
    //             this.setState({display:false,active:"null"});
    //           },300);
    //         }
    //       }
    //     },100)
    //   }
    render() {
        let backgroundColor, elevation;
        if (this.state.click) {
            // backgroundColor = this.props.theme.color.primary.light;
            elevation = this.props.elevation;
        }
        else {
            if (this.state.hover) {
                // backgroundColor = this.props.theme.color.primary.light;
                elevation = this.props.elevation + 1;
            }
            else {
                // backgroundColor = this.props.theme.color.primary.regular;
                elevation = this.props.elevation;
            }
        }
        if (this.props.theme.color.hasOwnProperty(this.props.color)) {
            backgroundColor = this.props.theme.color[this.props.color].regular;
        }
        else {
            backgroundColor = this.props.color;
        }
        const style = {
            menuBox: {
                margin: "0",
                height: this.props.height,
                display: "flex",
                padding: this.props.padding,
                alignItems: "center",
                cursor: "default",
                backgroundColor: backgroundColor,
                color: color,
            },
            itemBox: {
                position: "absolute",
                right: right,
                width: this.props.width,
                borderRadius: this.props.rounded ? this.props.theme.borderRadius.rounded : this.props.theme.borderRadius.default,
                backgroundColor: backgroundColor,
                boxShadow: this.props.theme.elevation[elevation],
                opacity: opacity,
                marginTop: marginTop,
                marginLeft: marginLeft
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
    elevation: 2
};
Menu.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string,
    theme: PropTypes.object,
    elevation: PropTypes.number
};

export default Menu;