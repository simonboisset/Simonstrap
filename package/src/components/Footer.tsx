import React from 'react';

import Div from './Div';

interface Props {
  children: React.ReactNodeArray | React.ReactNode | undefined,
}

export default function Footer(props: Props) {
  return (
    <Div width="100%" direction="row" justify="space-between" margin="0 50px 0 50px">
      {props.children}
    </Div>
  );
}