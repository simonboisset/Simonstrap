import styled from "styled-components";
import {basic} from "../themes/basic";
export const Card = styled.div`
  margin:10px;
  width: ${props => props.width ? props.width : "auto"}px;
  height:${props => props.height ? props.height : "auto"}px;
  margin:${props => props.margin ? props.margin : '0'};
  display:flex;
  border: none;
  border-radius:${props => props.rounded ? "18px" : "3px"};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content:${props => props.justify ? props.justify : 'flex-start'};
  align-items:${props => props.align ? props.align : 'flex-start'};
  box-shadow: ${props => props.shadow ? '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' : props.theme.header.elevation};
`;
Card.defaultProps = {theme: basic};
