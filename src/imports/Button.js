import styled from "styled-components";

export const Button = styled.button`
  margin:10px;
  width: ${props => props.width ? props.width : props.theme.button.width}px;
  height:${props => props.height ? props.height : props.theme.button.height}px;
  color:white;
  border: none;
  border-radius:${props => props.rounded ? "18px" : "3px"};
  background-color:
  ${(props)=>{
    switch (props.color) {
      case "primary":{
        return props.theme.color.primary;
      }


      default:{
        return props.theme.color.primary;
      }

    }
  }};
  &:hover{
    background-color:${props => props.theme.color.primaryLight};
  }
  &:active{
    background-color:${props => props.theme.color.primary};
  }
  &:focus{
    outline: none;
  }
`;
