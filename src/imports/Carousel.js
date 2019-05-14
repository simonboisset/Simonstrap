import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
import Image from "./Image";
import Icon from "./Icon";
import { RSA_NO_PADDING } from 'constants';
class Carousel extends React.Component {
    constructor() {
        super();
        this.refItem = React.createRef();
        this.state = {
            active: 0,
        }
    }
    increment(value) {
        let active = this.state.active + value;
        if (active === -1) {
            active = this.props.images.length - 1;
        }
        if (active === this.props.images.length) {
            active = 0
        }
        this.setState({ active });
        console.log(active);
        
    }
    render() {
        const style = {
            carousel: {
                width: this.props.width,
                height: this.props.height,
                display: "inline flex",
                flexDirection: "row",
                marginLeft: "0px",
                flexWrap: "wrap",
                overflow: "hidden",
            },
            container: {
                position: "relative",
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: "105"
            },
            image: {
                position: "relative",
                top: "-100%",
                left: "-100%",
                width: "300%",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                zIndex: "100",
            },
            leftButton: {
                backgroundColor: "red",
                outline: "none",
                border: "none",
            },
            rightButton: {
                backgroundColor: "red",
                outline: "none",
                border: "none",
            },
            leftImage: {
                position:"relative",
                left: -150+"px",
                transition: "left 300ms linear",
            },
            activeImage: {
                position:"relative",
                left: 2*this.props.width+"px",
                transition: "left 300ms linear",
            },
            rightImage: {
                position:"relative",
                left: 0+"px",
                transition: "left 300ms linear",
            }
        }
        return (
            <div style={style.carousel}><div style={style.container}>
                <button style={style.leftButton} onClick={() => this.increment(-1)}><Icon size="35px" color="white">keyboard_arrow_left</Icon></button>
                <button style={style.rightButton} onClick={() => this.increment(1)}><Icon size="35px" color="white">keyboard_arrow_right</Icon></button>
            </div>
                <div style={style.image}>
                    {this.props.images.map((image, index) => {
                        if (index === this.state.active - 1 || index === this.state.active + this.props.images.length - 1) {
                            return (<Image key={index} style={style.rightImage} width={this.props.width} height={this.props.height} src={image} />)
                        }
                        if (index === this.state.active) {
                            return (<Image key={index} style={style.activeImage} width={this.props.width} height={this.props.height} src={image} />)
                        }
                        if (index === this.state.active + 1 || index === this.state.active - this.props.images.length + 1) {
                            return (<Image key={index} style={style.leftImage} width={this.props.width} height={this.props.height} src={image} />)
                        }
                    }

                    )}
                </div>
            </div>
        );
    }
}
Carousel.defaultProps = {
    height: "auto",
    width: "auto",
    theme: basic,
    elevation: 0
};
Carousel.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    theme: PropTypes.object,
    elevation: PropTypes.number
};

export default Carousel;