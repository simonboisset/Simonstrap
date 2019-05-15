import React from 'react';
import PropTypes from 'prop-types';
import { basic } from "../themes/basic";
class Table extends React.Component {
    render() {
        let flexDirection,borderBottom,alignItems;
        if (this.props.row) {
            flexDirection="row";
            borderBottom= "0.5px solid black";
            alignItems="flex-start";
        }
        else{
            flexDirection="column";
            borderBottom="none";
            alignItems="flex-start";
        }
        const style = {
            display:"flex",
            margin:"5px",
            flexDirection,
            borderBottom,
            flex:"1",
        }
        return (
            <div style={style}>{this.props.children}</div>
        );
    }
}
Table.defaultProps = {
    row: false,
    title: false,
};
Table.propTypes = {
    row: PropTypes.bool,
    title: PropTypes.bool,
};

export default Table;