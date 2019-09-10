import React from 'react';
import PropTypes from 'prop-types';
class Label extends React.Component {
    render() {
        let flexDirection, justifyContent,alignItems;
        switch (this.props.position) {
            case "Top": {
                flexDirection = "column";
                justifyContent = "flex-start";
                alignItems="flex-start";
                break;
            }
            case "Left": {
                flexDirection = "row";
                justifyContent = "flex-start";
                alignItems="center";
                break;
            }
            case "Bottom": {
                flexDirection = "column-reverse";
                justifyContent = "flex-end";
                alignItems="flex-start";
                break;
            }
            case "Right": {
                flexDirection = "row-reverse";
                justifyContent = "flex-end";
                alignItems="center";
                break;
            }
            default: {
                flexDirection = "column";
                justifyContent = "flex-start";
                break;
            }
        }
        const style = {
            margin: "10px",
            display: "flex",
            justifyContent,
            alignItems,
            flexDirection,
            ...this.props.style
        }
        return (
            <label style={style}>
                <div style={{margin:"10px"}}>{this.props.label}</div>
                {this.props.children}
            </label>
        );
    }
}
Label.defaultProps = {
    position: "Top"
};
Label.propTypes = {
    position: PropTypes.oneOf(["Top", "Bottom", "Left", "Right"]),
};
export default Label;