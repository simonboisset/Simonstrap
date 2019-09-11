import React from 'react';
import { AppBar, AppContainer, Div, Icon, Card, Progress, Button } from '../../package'
export default function App(props: any) {
  return (
    <AppContainer
      header={<AppBar><Icon>menu</Icon>Coucou</AppBar>}
      body={<Card width="60%">
        Body
        <Progress value={80} />
        <Button>Click</Button>
      </Card>}
      footer={<Div backgroundColor="green">Footer</Div>}
    />
  );
}

