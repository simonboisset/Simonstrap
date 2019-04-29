import React from 'react';
import {Drawer,Button} from '../../src';
class DrawerStory extends React.Component {
    constructor(){
        super();
        this.state = {
          left:false,
          top:false,
          right:false,
          bottom:false,
        }
    }
    render() {
        return(
        <div>
            <Button onClick={()=>this.setState({left : !this.state.left})}>Left</Button>
            <Button onClick={()=>this.setState({right : !this.state.right})}>Right</Button>
            <Button onClick={()=>this.setState({top : !this.state.top})}>Top</Button>
            <Button onClick={()=>this.setState({bottom : !this.state.bottom})}>Bottom</Button>
            <Drawer onClose={()=>this.setState({left : false})} active={this.state.left}>Left</Drawer>
            <Drawer onClose={()=>this.setState({top : false})} position="Top" active={this.state.top}>Top</Drawer>
            <Drawer onClose={()=>this.setState({right : false})} position="Right" active={this.state.right}>Right</Drawer>
            <Drawer onClose={()=>this.setState({bottom : false})} position="Bottom" active={this.state.bottom}>Bottom</Drawer>
        </div>
        );
    }
}
export default DrawerStory;