import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
import Image from "./Image";
class Carousel extends React.Component {
    render() {
        let borderRadius;
        if (this.props.rounded) {
            borderRadius = "18px";
        }
        else {
            borderRadius = "3px";
        }
        const style = {
            carousel: {
                width: this.props.width,
                height: this.props.height,
                overflow: "hidden",
                display:"flex",
                flexDirection:"row",
                flexWrap:"wrap",
                marginLeft:"-200px"
            },
            leftButton: {},
            rightButton: {}
        }
        return (
            <div style={style.carousel}>
                {this.props.images.map(image =>
                    <Image width={this.props.width} height={this.props.height} src={image} />
                )}
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