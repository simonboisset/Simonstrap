import React from 'react';
import PropTypes from 'prop-types';
class Icon extends React.Component {
  render() {
    const style={
      margin : "0",
      fontFamily: "Material Icons",
      fontWeight: "normal",
      fontStyle: "normal",
      color:this.props.color,
      fontSize: this.props.size,
      display: "inline-block",
      lineHeight: "1",
      textTransform: "none",
      letterSpacing: "normal",
      wordWrap: "normal",
      whiteSpace: "nowrap",
      direction: "ltr",
      textRendering: "optimizeLegibility",
      fontFeatureSettings: 'liga',
      ...this.props.style
    }
    return (<i style={style}>{this.props.children}</i>);
  }
}
Icon.defaultProps = {
  size: "inherit",
  color: "inherit",
};
Icon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};
export default Icon;