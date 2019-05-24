import React from 'react';
// import PropTypes from 'prop-types';

class Body extends React.Component {
  render() {
    const style={
      margin:"10px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      overflow: "auto",
      ...this.props.style
    }
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default Body;