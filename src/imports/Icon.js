import React from 'react';
// import PropTypes from 'prop-types';
class Icon extends React.Component {
  render() {
    const style={
      margin : "0",
      fontFamily: "Icons",
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: "24px",
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
export default Icon;