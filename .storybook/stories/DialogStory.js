import React from 'react';
// import PropTypes from 'prop-types';
import {Dialog,Button} from '../../src';
class DialogStory extends React.Component {
    constructor(){
        super();
        this.state = {
          active:false,
        }
    }
    render() {
        return(
        <div>
            <Button onClick={()=>this.setState({active : !this.state.active})}>Toogle</Button>
            <Dialog onClose={()=>this.setState({active : false})} active={this.state.active}>
                Coucou
            </Dialog>
        </div>
        );
    }
}
// DialogStory.defaultProps = {
//   delay: "300ms"
// };
// DialogStory.propTypes = {
//   delay: PropTypes.string,
//   active: PropTypes.bool,
//   onClose: PropTypes.func,
// };

export default DialogStory;