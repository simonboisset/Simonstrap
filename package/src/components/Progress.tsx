import React from 'react';

interface Props{
    value: number
}

export default function Progress(props: Props) {
    const style:any = {
        container: {
            boxSizing: "border-box",
            width: "100%",
            height: "5px",
            borderRadius:"2px",
            overflow: "hidden",
            display:"flex",
            flexDirection:"row",
            backgroundColor:"grey",
            margin:"10px 0 10px 0"
        },
        progress: {
            height:"100%",
            width:props.value+"%",
            backgroundColor:"red"
        }
    }
    return (
        <div style={style.container}><div style={style.progress}></div>
        </div>
    );
}
Progress.defaultProps = {
  value :0
};