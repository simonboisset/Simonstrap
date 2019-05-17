import React from 'react';
import {Collapse,Button} from '../../src';
class CollapseStory extends React.Component {
    constructor(){
        super();
        this.state = {
          open:false,
        }
    }
    render() {
        return(
        <div>
            <Button onClick={()=>this.setState({open : !this.state.open})}>Toogle</Button>
            <Collapse open={this.state.open}>
                Collapse
            </Collapse>
        </div>
        );
    }
}
export default CollapseStory;