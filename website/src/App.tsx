import React from 'react';
import { AppBar, AppContainer, Div } from '../../package'
export default function App(props: any) {
  return (
    <AppContainer
      header={<AppBar>Coucou</AppBar>}
      body={<Div backgroundColor="green">Body</Div>}
      footer={<Div backgroundColor="green">Footer</Div>}
    />
  );
}

