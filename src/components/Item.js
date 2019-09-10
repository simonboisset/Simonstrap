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
        zIndex:"801",
        height:this.props.height,
        width:"100%",
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
  height: basic.size.height,
  color: "primary",
  elevation: 2,
  padding:"5px 5px 5px 5px",
  theme: basic,
};
Item.propTypes = {
  height: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.object,
};

export default Item;