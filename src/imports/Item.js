import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
class Item extends React.Component {
  constructor() {
    super();
    this.state = {
      click: false,
      hover: false
    }
  }
  render() {
    let color;
    if (this.state.click) {
      color = this.props.theme.color.default.light;
    }
    else {
      if (this.state.hover) {
        color = this.props.theme.color.default.regular;
      }
      else {
        color = this.props.theme.color.default.light;
      }
    }
    const style = {
        margin: "0",
        height:this.props.height,
        display: "flex",
        padding:this.props.padding,
        alignItems:"center",
        cursor: "default",
        color:color
    }
    return (
      <div
        style={style}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false, click: false })}
        onMouseUp={() => this.setState({ click: false })}
        onMouseDown={() => this.setState({ click: true })}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}
Item.defaultProps = {
  width: basic.size.width,
  height: basic.size.height,
  color: "primary",
  theme: basic,
  elevation: 2
};
Item.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  theme: PropTypes.object,
};

export default Item;