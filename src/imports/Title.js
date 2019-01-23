import styled from "styled-components";
import {basic} from "../themes/basic";
export const Title = styled.h1`
  color: ${props =>props.color?props.color:"white"};
  margin-left:30px;
  margin-right:30px;
`;
export const Text = styled.p`
  color: ${props =>props.color?props.color:"rgb(100,100,100)"};
  margin-left:15px;
  margin-right:15px;
`;
Text.defaultProps = {theme: basic};
export const Divider = styled.div`
  border : none;
  height : 1px;
  width : 100%;
  background-color:rgb(150,150,150);
  margin-top:10px;
  margin-bottom:10px;
`;
Divider.defaultProps = {theme: basic};
