import React from 'react';
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
                Dialog
            </Dialog>
        </div>
        );
    }
}
export default DialogStory;