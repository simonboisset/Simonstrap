import React from 'react';

import Div from './Div';

interface Props {
  children: React.ReactNodeArray | React.ReactNode | undefined,
  title: string | undefined
}

export default function AppBar(props: Props) {
  return (
    <Div height="60px" backgroundColor="red" color="white" width="100%" gap="50px" direction="row" padding="20px">
      {props.children}
    </Div>
  );
}