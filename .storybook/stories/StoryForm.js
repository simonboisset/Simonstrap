import React from 'react';
import { Div, Button, Input } from '../../src';
class StoryForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
    }
    handlSubmit = () => {
        console.log(this.state);
    }
    render() {
        
        return (
            <Div row wrap>
                <Input onChange={(value) => this.setState({ name: value })} label="name" />
                <Input type="file" label="Load File" onChange={(value) => this.setState({ file: value })} />
                <Input type="checkbox" label="Check" onChange={(value) => this.setState({ check: value })} />
                <Input type="swipe" label="Swipe" onChange={(value) => this.setState({ swipe: value })} />
                <Input label="Label" inputList={[{ label: "Value 1",value:0 }, { label: "Value 2",value:1 }, { label: "Value 3",value:2 }, { label: "Value 4",value:3 }]}
                    type="checklist" name="test" onChange={(value) => this.setState({ checkList: value })} />
                <Input inputList={[{ label: "Value 1",value:0 }, { label: "Value 2",value:1 }, { label: "Value 3",value:2 }, { label: "Value 4",value:3 }]}
                    type="radio" name="test" onChange={(value) => this.setState({ radio: value })} />
                <Input type="range" label="Range" onChange={(value) => this.setState({ range: value })} />
                <Input label="Label" inputList={[{ label: "Value 1",value:0 }, { label: "Value 2",value:1 }, { label: "Value 3",value:2 }, { label: "Value 4",value:3 }]}
                    type="select" name="test" onChange={(value) => this.setState({ select: value })} />
                <Button onClick={this.handlSubmit}>Submit</Button>
            </Div>
        );
    }
}
export default StoryForm;