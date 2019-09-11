import React from 'react';
import Div,{Props} from './Div';

export default function Card(props: Props) {
  return (
    <Div {...props}>
      {props.children}
    </Div>
  );
}
Card.defaultProps = {
  borderRadius: '3px',
  backgroundColor: 'white',
  elevation:3
};