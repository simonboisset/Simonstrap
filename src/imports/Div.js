import styled from "styled-components";
export const Div = styled.div`
  display: flex;
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  margin:${props => props.margin ? props.margin : '0'};
  padding:${props => props.padding ? props.padding : '0'};
  width: ${props => props.width ? props.width : 'auto'};
  height: ${props => props.height ? props.height : 'auto'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  position:${props => props.container ? 'absolute' : 'relative'};
  bottom: ${props => props.container ? window.innerHeight : 'auto'};
  justify-content:${props => props.justify ? props.justify : 'flex-start'};
  align-items:${props => props.align ? props.align : 'flex-start'};
  background-color:${props => props.background ? props.background : 'none'};
  background-image: ${props => props.image ? 'url('+props.image+')' : 'none'};
  background-size: ${props => props.image ? 'cover' : 'none'};
`;
