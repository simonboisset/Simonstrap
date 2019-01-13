import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items:center;
  height : ${props => props.theme.footer.height}px;
  bottom: 100%;
  width: 100%;
  background-color: ${props=>props.theme.color.primary};
`;
