import React from 'react';
import image from "./image.jpg"
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
            <Image src={image}/>
        </div>
        );
    }
}
export default ImageStory;