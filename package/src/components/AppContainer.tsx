import React from 'react';

import Div from './Div';

interface Props {
  body: React.ReactNode | undefined,
  header: React.ReactNode | undefined,
  footer: React.ReactNode | undefined,
}

export default function AppContainer(props: Props) {
  return (
    <Div height="100vh" justify="space-between" gap="50px">
      <Div gap="50px">
        {props.header}
        {props.body}
      </Div>
      {props.footer}
    </Div>
  );
}