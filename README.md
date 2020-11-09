# Simon UI

React Components based on [material-ui](https://material-ui.com/)

This lib is using material-ui for UI components and theming but it's more concise and optimized for forms with [reac-hook-form](https://react-hook-form.com/).

Moreover all components are based on Grid container.

I choosed to include material-ui for ui, react-hook-form for forms, yup for schema validation, react-router-url form routing and using all of them together with best-practices.

# Install

```sh
yarn add simon-ui
```

# Get Started

use the context provider for theming and hooks.

```jsx
import { SimonProvider, Theme } from "simon-ui";

const theme: Theme = {
  palette: {
    primary: {
      main: "#81c784",
    },
    secondary: {
      main: "#e57373",
    },
  },
};

function App() {
  return (
    <SimonProvider theme={theme}>
      <YourApp />
    </SimonProvider>
  );
}
```

Theme is use the material-ui [theme](https://material-ui.com/customization/theming/).

# Router

## PageRouter

Fore routing we use [react-router-url](https://github.com/simonboisset/react-router-url/tree/main/react-router-url)

```jsx
import { PageRouter, Text, Redirect } from "simon-ui";

<PageRouter
  header={<Header />}
  drawer={<Drawer />}
  auth={auth}
  routes={[
    { path: "/account", protected: true, component: <Acount /> },
    {
      path: "/",
      component: <Redirect to="/home" />,
      routes: [
        { path: "/home", component: <Home /> },
        { path: "/aboutus", component: <About /> },
        { path: "/contact", component: <Contact /> },
      ],
    },
  ]}
/>;
```

# Container

# Button

# Form

```jsx
import {
  Button,
  Container,
  Form,
  InputCheckBox,
  InputDate,
  InputRadio,
  InputSelect,
  InputSlider,
  InputSwitch,
  InputText,
  Text,
  useForm,
  yup,
} from "simon-ui";

const genders = [
  { name: "Male", value: "male" },
  { name: "Female", value: "female" },
];

const pets = [
  { label: "Cat", name: "cat" },
  { label: "Dog", name: "dog" },
  { label: "Mousse", name: "mousse" },
  { label: "Fish", name: "fish" },
  { label: "Bird", name: "bird" },
];
export const FormPage = () => {
    const methods = useForm(FormSchema);

    const handleSubmit =(data)=>{
    ...
    }
    return (
    <Form methods={methods} onSubmit={handleSubmit}>
        <Container>
        <Text variant="h3">Formulaire</Text>
        <InputText name="name" label="Name" xs={8} />
        <InputText name="age" label="Age" xs={4} />
        <InputSelect name="gender" label="Gender" items={genders} xs={4} />
        <InputDate name="birthDate" label="Birth Date" xs={8} />
        <InputRadio name="gender" label="Gender" items={genders} xs={4} />
        <InputSlider name="poids" label="Poids" xs={8} />
        <InputCheckBox name="pets" label="Pets" items={pets} />
        <InputSwitch name="on" label="On" />
        <Button variant="contained" color="secondary" xs={6}>
            Cancel
        </Button>
        <Button variant="contained" type="submit" color="primary" xs={6}>
            Submit
        </Button>
        </Container>
    </Form>
  );
};
```

## InputText

## InputSelect

## InputDate

## InputRadion

## InputSlider

## InputSwitch

## CheckBox

# Modal

```jsx
import { Button, Container, Modal, Text, useForm, useModalURL } from "simon-ui";

export const ModalPage = () => {
  // Use this to use context
  const { open, openModal, closeModal } = useModal("form-modal");
  // Or this to use url
  const { open, openModal, closeModal } = useModalURL("/modal/open");
  const methods = useForm(FormSchema);

  return (
    <Container>
      <Text variant="h3">Modal</Text>
      <Button onClick={openModal}>Open</Button>
      <Modal open={open} onClose={closeModal}>
        <MyModal />
      </Modal>
    </Container>
  );
};
```
