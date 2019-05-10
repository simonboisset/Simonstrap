import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Div, Body, Select, Icon, Button, Card, Dialog, Drawer,
  Footer, Header, Input, Item, Menu, Title, Text
} from '../src';
import { DialogStory, DrawerStory, ImageStory } from './stories';
storiesOf('Layout', module)
  .add('Header', () => (
    <Header>Hello</Header>
  ))
  .add('Body', () => (
    <Body style={{ backgroundColor: "red" }}></Body>
  ))
  .add('Div', () => (
    <div>
      <Div text="h1">H1</Div>
      <Div text="h5">H5</Div>
      <Div text="30px">30px</Div>
    </div>
  ));
storiesOf('Button', module)
  .add('Default', () => (
    <Button>Button</Button>
  ))
  .add('Rounded', () => (
    <Button color="default" rounded>Button</Button>
  ));
storiesOf('Card', module)
  .add('Card', () => (
    <Card shadow>Hello</Card>
  ));
storiesOf('Dialog', module)
  .add('Dialog', () => (
    <DialogStory />
  ));
storiesOf('Drawer', module)
  .add('Drawer', () => (
    <DrawerStory />
  ));
storiesOf('Icon', module)
  .add('Material', () => (
    <div>
      <Icon>home</Icon>
      <Icon>person</Icon>
      <Icon>done</Icon>
      <Icon>mail</Icon>
      <Icon>alarm</Icon>
    </div>
  ));
storiesOf('Tab', module)
  .add('Tab', () => (
    <div>
      Tab
    </div>
  ))
  .add('List', () => (
    <div>
      Tableau
    </div>
  ));
storiesOf('Image', module)
  .add('Image', () => (
    <ImageStory />
  ))
  .add('Carousel', () => (
    <ImageStory />
  ));
storiesOf('Form', module)
  .add('Input', () => (
    <div>
      <Input label="Top" />
      <Input position="Bottom" label="Bottom" />
      <Input position="Left" label="Left" />
      <Input position="Right" label="Right" />
    </div>
  ))
  .add('Input File', () => (
    <Input type="file" label="Load File" />
  ))
  .add('CheckBox', () => (
    <Input type="checkbox" label="Load File" />
  ))
  .add('Swipe', () => (
    <Input type="swipe" label="Load File" />
  ))
  .add('Select, Radio', () => (
    <form>
      <Input type="radio" name="test" label="Value 1" />
      <Input type="radio" name="test" label="Value 2" />
      <Input type="radio" name="test" label="Value 3" />
      <Input type="radio" name="test" label="Value 4" />
    </form>
  ))
  .add('Slider', () => (
    <Input type="range" label="Load File" />
  ))
  .add('Date', () => (
    <Input type="date" label="Load File" />
  ))
  .add('Hour', () => (
    <Input type="hour" label="Load File" />
  ));
storiesOf('Menu', module)
  .add('Menu', () => (
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
        <Menu label="Clic" trigger="Focus">
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
storiesOf('Progress', module)
  .add('Bar', () => (
    <div>
      Bar
    </div>
  ))
  .add('Circle', () => (
    <div>
      Circle
    </div>
  ));
