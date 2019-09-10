import React from 'react';
import PropTypes from 'prop-types';
class Collapse extends React.Component {
    constructor() {
        super();
        this.refCollapse = React.createRef();
    }
  render() {
      let height;
      if (this.props.open) {
          height=this.refCollapse.current.getBoundingClientRect().height;
      }
      else{
          height="0px";
      }
    const style={
        height,
        overflow: "hidden",
        transition: "height 300ms linear",
      ...this.props.style
    }
    return (<div style={style}><div ref={this.refCollapse}>{this.props.children}</div></div>);
  }
}
Collapse.propTypes = {
  open: PropTypes.bool,
};
export default Collapse;