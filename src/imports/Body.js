import styled from "styled-components";
export const Body = styled.div`
  min-height : ${props => window.innerHeight-props.theme.header.height-props.theme.footer.height}px;
  width: 100%;
  background-color: white;
  padding-top : ${(props) => {
    if (props.theme.header.position){
      if (props.theme.header.position==="fixed"){
        return "50px";
      }
      return "0";
    }
    return "0";
  }};
`;
