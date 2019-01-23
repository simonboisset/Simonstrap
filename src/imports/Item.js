import styled from "styled-components";
import {basic} from "../themes/basic";
export const Item = styled.div`
  margin: ${props => props.margin ? props.margin : '0'};
  height:${props =>props.height ? props.height : props.theme.header.height}px;
  display: flex;
  padding:${props => props.padding ? props.padding : props.theme.menu.padding};
  align-items:center;
  &:hover{
   cursor: default;
   background-color:${props => props.hover ? props.hover : props.theme.menu.hover.background};
   color:${props => props.theme.menu.hover.text};
  }
  &:active{
   background-color:${props =>props.theme.menu.clic.background};
   color:${props => props.theme.menu.clic.text};
  }
`;
Item.defaultProps = {theme: basic};
