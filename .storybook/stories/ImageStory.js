import React from 'react';
import favicon from "./react.ico"
import {Image} from '../../src';
class ImageStory extends React.Component {
    constructor(){
        super();
        this.state = {
          active:false,
        }
    }
    render() {
        return(
        <div>
            <Image width="300px" height="200px" src={favicon}/>
        </div>
        );
    }
}
export default ImageStory;