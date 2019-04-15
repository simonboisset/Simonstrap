import React from 'react';
import { storiesOf } from '@storybook/react';
import { SetGlobalTheme,Div,Body,Image,Icon,Button,Card,Dialog,Drawer,
  Footer,Header,Input,Item,Menu,Title,Text } from '../src';
import {DialogStory,DrawerStory,ImageStory} from './stories';
storiesOf('Page', module)
  .add('Exemple 1', () => (
    <Button>Hello Button</Button>
  ))
;
storiesOf('Body', module)
  .add('Simple Body', () => (
    <Body></Body>
  ))
;
storiesOf('Button', module)
  .add('Default', () => (
    <Button>Button</Button>
  ))
  .add('Rounded', () => (
    <Button rounded>Button</Button>
  ))
;
storiesOf('Card', module)
  .add('with text', () => (
    <Card shadow>Hello Button</Card>
  ))
;
storiesOf('Dialog', module)
  .add('with text', () => (
    <DialogStory/>
  ))
;
storiesOf('Div', module)
  .add('with text', () => (
    <Div>Hello Div</Div>
  ))
;
storiesOf('Drawer', module)
  .add('with text', () => (
    <DrawerStory/>
  ))
;
storiesOf('Header', module)
  .add('Simple', () => (
    <Header>Hello Button</Header>
  ))
  .add('with Title', () => (
    <div>
    <Header><SetGlobalTheme/>
      <Title>Title</Title>
      <Div row>
        <Menu label={<Icon>delete</Icon>}>
          <Menu left vertical label="Menu"><Item>Coucou</Item></Menu>
          <Menu left vertical label="Menu">
            <Menu left vertical label="Menu"><Item>Coucou</Item></Menu>
          </Menu>
          <Item>Coucou</Item>
        </Menu>
        <Menu label="Menu"><Item>Coucou</Item></Menu>
      </Div>
    </Header></div>
  ))
  .add('with Title and Menu', () => (
    <Header>Hello Button</Header>
  ))
;
storiesOf('Icon', module)
  .add('with text', () => (
    <Icon>home</Icon>
  ))
;
storiesOf('Image', module)
  .add('with text', () => (
    <ImageStory/>
  ))
;
storiesOf('Input', module)
  .add('with text', () => (
    <Input/>
  ))
  .add('with File', () => (
    <Input type="file" label="Load File"/>
  ))
;
storiesOf('Menu', module)
  .add('with text', () => (
    <Menu>Hello Button</Menu>
  ))
;
