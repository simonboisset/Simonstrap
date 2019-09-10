import {keyframes} from "styled-components";
export const Light = {
  animation:{
    moovingFadeIn:function(){return (keyframes`
      from {
        opacity: 0;
        margin-top:"20px";
      }
      to {
        opacity: 1;
        margin-top:0;
      }
    `);},
    slideLeftIn:function(){return (keyframes`
      from {
        left: -60px;
      }
      to {
        left: 0;
      }
    `);},
    slideLeftOut:function(){return (keyframes`
      from {
        left: 0;
      }
      to {
        left: -60px;
      }
    `);},
    fadeIn:function(){return (keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `);},
    fadeOut:function(){return (keyframes`
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
      }
    `);},
  },
  color : {
    primary : "rgb(134, 223, 195)",
    primaryLight:"rgb(195, 239, 218)"
  },
  button:{
    height:36,
    width:150
  },
  header:{
    position:"relative",
    color:function(){return Light.color.primary},
    height:60,
    elevation:"none"
  },
  footer:{
    height:30
  },
  menu:{
    clic:{
      background:"rgba(0, 0, 0, 0)",
      text:"rgba(0, 0, 0, 0.3)"
    },
    hover:{
      background:"rgba(0, 0, 0, 0)",
      text:"rgba(0, 0, 0, 0.6)"
    },
    padding:"10px",
    elevation:"0 3px 6px rgba(0,0,0,0.23)",
    item:{
      color:"white",
      width:150,
      height:"300px",
      radius:"3px",
      opacity: {
        in:"1",
        out:"0"
      },
      margin: {
        vertical:{
          in:"100%",
          out:"150%"
        },
        horizontal:{
          in:"0px",
          out:"20px"
        }
      },
      time:"300ms",
      transition:function(vertical ,left,go){
        let margin={};
        let direction="";
        if (vertical) {
          direction="left";
          if (left) {
            margin={
              from:`-${Light.menu.item.margin.vertical.out}`,
              to:`-${Light.menu.item.margin.vertical.in}`
            }
          }else {
            margin={
              from:Light.menu.item.margin.vertical.out,
              to:Light.menu.item.margin.vertical.in
            }
          }
        }else {
          direction="top";
          margin={
            from:Light.menu.item.margin.horizontal.out,
            to:Light.menu.item.margin.horizontal.in
          }
        }
        let opacity ={
          from:0,
          to:1
        }
        if (!go) {
          opacity ={
            from:opacity.to,
            to:opacity.from
          }
          margin={
            from:margin.to,
            to:margin.from
          }
        }
        return (keyframes`
          from {
            opacity: ${opacity.from};
            margin-${direction}:${margin.from};
          }
          to {
            opacity: ${opacity.to};
            margin-${direction}:${margin.to};
          }
        `);
      }
    }
  },
  drawer:{
    width:150
  },
  dialog:{},
}
