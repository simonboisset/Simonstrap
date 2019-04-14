import React from 'react';
import {Drawer,Button} from '../../src';
class DrawerStory extends React.Component {
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
            <Drawer onClose={()=>this.setState({active : false})} active={this.state.active}>
                Coucou
            </Drawer>
        </div>
        );
    }
}
export default DrawerStory;