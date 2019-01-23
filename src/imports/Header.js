import styled from "styled-components";
import {basic} from "../themes/basic";
export const Header = styled.header`
  display : flex;
  position :relative;
  flex-direction : row;
  justify-content : space-between;
  align-items :center;
  color : ${props => props.theme.header.textColor};
  height : ${props => props.height ? props.height : props.theme.header.height}px;
  width : 100%;
  z-index :990;
  background-color : ${props => props.color ? props.color : props.theme.header.color};
  box-shadow : ${props => props.shadow ? '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' : props.theme.header.elevation};
`;
Header.defaultProps = {theme: basic};
