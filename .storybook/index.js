import React from 'react';
import { storiesOf } from '@storybook/react';
import favicon from "./react.ico"
import {
  Div, Body, Icon, Button, Card, Header, Input,
  Item, Menu, Image, Carousel, Progress, Table, Collapse
} from '../src';
import { DialogStory, DrawerStory, CollapseStory } from './stories';
storiesOf('Layout', module)
  .add('Header', () => (
    <Header></Header>
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
    <div>
      <Button>Button</Button>
      <Button variant="flat">Button</Button>
    </div>
  ))
  .add('Rounded', () => (
    <div>
      <Button color="default" type="rounded">Button</Button>
      <Button color="default" variant="flat" type="rounded">Button</Button>
    </div>
  ))
  .add('Icon Button', () => (
    <div>
      <Button type="icon">home</Button>
      <Button variant="flat" type="icon">home</Button>
    </div>
  ));
storiesOf('Card', module)
  .add('Card', () => (
    <Card shadow></Card>
  ));
storiesOf('Dialog', module)
  .add('Dialog', () => (
    <DialogStory />
  ));
storiesOf('Drawer', module)
  .add('Drawer', () => (
    <DrawerStory />
  ))
  .add('Collapse', () => (
    <CollapseStory />
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
storiesOf('Tableau', module)
  // .add('Tab', () => (
  //   <div>
  //     Tab
  //   </div>
  // ))
  .add('Table', () => (
    <Table>
      <Table row>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
      </Table>
      <Table row>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
      </Table>
      <Table row>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
      </Table>
      <Table row>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
        <Table>Cellule</Table>
      </Table>
    </Table>
  ));
storiesOf('Image', module)
  .add('Image', () => (
    <Image width="300px" height="200px" src={favicon} />
  ))
  .add('Carousel', () => (
    <Carousel width="400px" height="200px" images={[favicon, favicon, favicon, favicon]} />
  ));
storiesOf('Form', module)
  .add('Input', () => (
    <Div row>
      <Input label="Top" />
      <Input position="Bottom" label="Bottom" />
      <Input position="Left" label="Left" />
      <Input position="Right" label="Right" />
    </Div>
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
    <Input inputList={[{ label: "Value 1" }, { label: "Value 2" }, { label: "Value 3" }, { label: "Value 4" }]} type="radio" name="test" />
  ))
  .add('Checkbox list', () => (
    <Input label="Label" inputList={[{ label: "Value 1" }, { label: "Value 2" }, { label: "Value 3" }, { label: "Value 4" }]} type="checklist" name="test" />
  ))
  .add('Slider', () => (
    <Input type="range" label="Load File" />
  ))
  .add('Select', () => (
    <Div row>
      <Input label="Label" inputList={[{ label: "Value 1" }, { label: "Value 2" }, { label: "Value 3" }, { label: "Value 4" }]} type="select" name="test" />
      <Input label="Label" inputList={[{ label: "Value 1" }, { label: "Value 2" }, { label: "Value 3" }, { label: "Value 4" }]} type="select" name="test" />
    </Div>));
// .add('Date', () => (
//   <Input type="date" label="Load File" />
// ))
// .add('Hour', () => (
//   <Input type="hour" label="Load File" />
// ));
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
      <Progress value={30} />
      <Progress value={70} />
    </div>
  ))
  // .add('Circle', () => (
  //   <div>
  //     Circle
  //   </div>
  // ));
  storiesOf('Full Page', module)
  .add('Page 1', () => (
    <Body>
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
    </Body>
  ))
