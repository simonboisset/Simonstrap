import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  SetGlobalTheme, Div, Body, Image, Icon, Button, Card, Dialog, Drawer,
  Footer, Header, Input, Item, Menu, Title, Text
} from '../src';
import { DialogStory, DrawerStory, ImageStory } from './stories';
storiesOf('Page', module)
  .add('Exemple 1', () => (
    <Button>Hello Button</Button>
  ));
storiesOf('Body', module)
  .add('Simple Body', () => (
    <Body></Body>
  ));
storiesOf('Button', module)
  .add('Default', () => (
    <Button>Button</Button>
  ))
  .add('Rounded', () => (
    <Button color="default" rounded>Button</Button>
  ));
storiesOf('Card', module)
  .add('with text', () => (
    <Card shadow>Hello Button</Card>
  ));
storiesOf('Dialog', module)
  .add('with text', () => (
    <DialogStory />
  ));
storiesOf('Div', module)
  .add('with text', () => (
    <Div>Hello Div</Div>
  ));
storiesOf('Drawer', module)
  .add('with text', () => (
    <DrawerStory />
  ));
storiesOf('Header', module)
  .add('Simple', () => (
    <Header>Hello Button</Header>
  ))
storiesOf('Icon', module)
  .add('with text', () => (
    <Icon>home</Icon>
  ));
storiesOf('Image', module)
  .add('with text', () => (
    <ImageStory />
  ));
storiesOf('Input', module)
  .add('with text', () => (
    <Input />
  ))
  .add('Input File', () => (
    <Input type="file" label="Load File" />
  ));
storiesOf('Menu', module)
  .add('with text', () => (
    <Menu label="Menu">
      <Menu label="Menu2">
        <Item>
          Item
      </Item>
      </Menu>
    </Menu>
  ))
  .add('Full exemple', () => (
    <Header>
      <Div row>
        <Menu padding="5px 5px 5px 10px" label={<Icon>menu</Icon>}>
          <Menu direction="Right" label="Right"><Item>Item</Item></Menu>
          <Menu direction="Right" label="Orientation">
            <Menu direction="Right" label="Bottom">
              <Item>Item</Item>
              <Item>Item</Item>
              <Item>Item</Item>
              <Item>Item</Item>
            </Menu>
            <Menu direction="Right" orientation="Top" label="Top">
              <Item>Item</Item>
              <Item>Item</Item>
              <Item>Item</Item>
            </Menu>
          </Menu>
          <Item>Item</Item>
        </Menu>
        <Menu label="Focus" trigger="Focus">
        <Menu direction="Right" trigger="Focus" label="Right"><Item>Item</Item></Menu>
        <Item>Item</Item></Menu>
      </Div>
      <Div row>
        <Menu direction="Bottom" orientation="Left" label="Left">
          <Item>Item</Item>
        </Menu>
        <Menu direction="Bottom" orientation="Right" label="Right">
          <Menu direction="Right" label="Right"><Item>Item</Item></Menu>
          <Menu direction="Left" label="Left">
            <Menu direction="Bottom" label="Bottom">
              <Menu direction="Left" label="Left">
                <Menu direction="Top" label="Top"><Item>Item</Item></Menu>
              </Menu>
            </Menu>
          </Menu>
        </Menu>
      </Div>
      <Div>
        <Menu padding="5px 10px 5px 5px" direction="Bottom" orientation="Left" label={<Icon>person</Icon>}><Item>Item</Item></Menu>
      </Div>
    </Header>
  ));
