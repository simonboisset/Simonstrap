import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
class Tab extends React.Component {
    render() {
        const style = {
            container: {
                width: this.props.width,
                height: this.props.height,
                borderRadius:"2px",
                overflow: "hidden",
                display:"flex",
                flexDirection:"row",
                backgroundColor:"grey",
                margin:"10px"
            },
            Tab: {
                height:"100%",
                width:this.props.value+"%",
                backgroundColor:"red"
            }
        }
        return (
            <div style={style.container}><div style={style.Tab}></div>
            </div>
        );
    }
}
Tab.defaultProps = {
    height: "4px",
    width: "250px",
    theme: basic,
    elevation: 0
};
Tab.propTypes = {
    height: PropTypes.string,
    width: PropTypes.string,
    theme: PropTypes.object,
    elevation: PropTypes.number
};

export default Tab;