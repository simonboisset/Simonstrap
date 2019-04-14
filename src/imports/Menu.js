// import styled, {withTheme} from "styled-components";
// import React from 'react';
// import {basic} from "../themes/basic";
// const MenuBox = styled.div`
//   margin: ${props => props.margin ? props.margin : '0'};
//   height:${props =>props.height ? props.height+"px" : props.theme.header.height+"px"};
//   display: flex;
//   padding:${props => props.padding ? props.padding : props.theme.menu.padding};
//   align-items:center;
//   &:hover{
//     cursor: default;
//     background-color:${props => props.hover ? props.hover : props.theme.menu.hover.background};
//     color:${props => props.theme.menu.hover.text};
//   }
//   ${props => props.button ? "&:active{background-color:"+props.theme.menu.clic+";}" : null}
// `;
// MenuBox.defaultProps = {theme: basic};
// const ItemBox = styled.div`
//   position:absolute;
//   ${props=>props.vertical? null : "&.right{right:0px;}"}
//   width : ${props => props.width ? props.width : props.theme.menu.item.width+"px"};
//   border-radius:${props =>props.theme.menu.item.radius};
//   background-color: ${props => props.color ? props.color : props.theme.menu.item.color};
//   box-shadow: ${props => props.shadow ? '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' : props.theme.menu.elevation};
//   opacity: ${props =>props.theme.menu.item.opacity.out};
//   &.passive {
//     opacity: ${props =>props.theme.menu.item.opacity.out};
//     margin-top:${props =>props.vertical ? (
//       props =>props.height ? "-"+props.height+"px" : "-"+props.theme.header.height+"px"
//     ) : props.theme.menu.item.margin.horizontal.out};
//     margin-left:${props => props.vertical ? (props.left?"-":null)+props.theme.menu.item.margin.vertical.out : "0"};
//     animation: ${props=>props.theme.menu.item.transition(props.vertical,props.left,false)}
//     ${props =>props.theme.menu.item.time} ease 1;
//   }
//   &.active {
//     opacity: ${props =>props.theme.menu.item.opacity.in};
//     margin-left:${props => props.vertical ?((props.left?"-":"")+ props.theme.menu.item.margin.vertical.in) : "0"};
//     margin-top:${props =>props.vertical ? (
//       props =>props.height ? "-"+props.height+"px" : "-"+props.theme.header.height+"px"
//     ) : props.theme.menu.item.margin.horizontal.in};
//     animation: ${props=>props.theme.menu.item.transition(props.vertical,props.left,true)} ${props =>props.theme.menu.item.time} ease 1;
//   }
// `;
// ItemBox.defaultProps = {theme: basic};
// class Menu extends React.Component {
//   constructor(){
//     super();
//     this.refContainer = React.createRef();
//     this.state = {
//       display:false,
//       active:"null",
//       timer:Date.now(),
//       class:""
//     }
//   }
//   componentDidMount(){
//     // console.log(this.refContainer.current.getBoundingClientRect());
//     if (window.innerWidth-this.refContainer.current.getBoundingClientRect().left<150) {
//       this.setState({class:"right"});
//     }
//   }
//   toogleMenu = (hover) => {
//     let timer = Date.now();
//     this.setState({timer})
//     setTimeout(()=>{
//       if (this.state.timer===timer) {
//         if (hover) {
//           this.setState({display:true});
//           setTimeout(()=>{
//             this.setState({active:"active"});
//           },50)
//         }else {
//           this.setState({active:"passive"});
//           setTimeout(()=>{
//             this.setState({display:false,active:"null"});
//           },300);
//         }
//       }
//     },100)
//   }
//   renderChildren = () => {
//     if (this.state.display) {
//       return (
//         <ItemBox {...this.props} className={`${this.state.active} ${this.state.class}`} >
//           {this.props.children}
//         </ItemBox>
//       );
//     } else {
//       return null;
//     }
//   }
//   render() {
//     return (
//       <div ref={this.refContainer} onMouseEnter={()=>this.toogleMenu(true)} onMouseLeave={()=>this.toogleMenu(false)}>
//         <MenuBox {...this.props}>{this.props.label}</MenuBox>
//         {this.renderChildren()}
//       </div>
//     )
//   }
// }
// export default withTheme(Menu);
