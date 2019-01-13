import styled from "styled-components";
export const Image = styled.div`
  width: ${props => props.width ? props.width : '100px'};
  height: ${props => props.height ? props.height : '100px'};
  overflow: hidden;
  border-radius:${props => props.rounded ? '50%' : '2px'};
  box-shadow:0 1px 4px rgba(0, 0, 0, .6);
  border-width:0;
  outline:none;
  background-image: ${props => props.src ? 'url('+props.src+')' : 'none'};
  background-size: ${props => props.src ? 'cover' : 'none'};
`;
