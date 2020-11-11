import { ThemeOptions } from '@material-ui/core';
import React from 'react';
import { history, useURL } from 'react-router-url';
import { Child } from './Component';
import { ThemeProvider } from './ThemeProvider';
const SimonContext = React.createContext(
  {} as {
    drawer?: boolean;
    setDrawer: (open: boolean) => void;
    modal?: string;
    setModal: (active?: string) => void;
    components: ComponentsTheme;
  }
);

type ComponentsTheme = {
  drawer: { z?: DrawerZindex; variant?: DrawerVariant; position?: DrawerPosition; width: number };
};
export type Theme = ThemeOptions & { components: ComponentsTheme };
type DrawerVariant = 'permanent' | 'persistent' | 'temporary';
type DrawerZindex = 'on' | 'under';
type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';
type SimonProviderProps = {
  theme: Theme;
  children?: Child;
};

export const SimonProvider = ({ children, theme }: SimonProviderProps) => {
  const [drawer, setDrawer] = React.useState(false);
  const [modal, setModal] = React.useState<string>();
  const { components, ...MUITheme } = theme;
  return (
    <ThemeProvider theme={MUITheme}>
      <SimonContext.Provider value={{ drawer, modal, setDrawer, setModal, components }}>
        {children}
      </SimonContext.Provider>
    </ThemeProvider>
  );
};

export const useDrawer = () => {
  const { drawer, setDrawer, components } = React.useContext(SimonContext);

  const openDrawer = () => {
    setDrawer(true);
  };
  const closeDrawer = () => {
    setDrawer(false);
  };
  const toogleDrawer = () => {
    setDrawer(!drawer);
  };
  return {
    open: drawer,
    closeDrawer,
    openDrawer,
    toogleDrawer,
    ...components.drawer,
  };
};

export const useModal = (name: string) => {
  const { modal, setModal } = React.useContext(SimonContext);

  const openModal = () => {
    setModal(name);
  };
  const closeModal = () => {
    setModal();
  };
  return { open: modal === name, openModal, closeModal, setModal };
};

export const useModalURL = (pathName: string) => {
  const { path } = useURL();

  const openModal = () => {
    history.push(pathName);
  };
  const closeModal = () => {
    const nextPath = path.split('/').slice(0, -1).join('/');

    history.push(nextPath);
  };
  return { open: path === pathName, openModal, closeModal };
};
