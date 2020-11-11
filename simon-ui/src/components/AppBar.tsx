import { AppBar as AppBarMUI, makeStyles, Theme, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { classNames } from '../utils/classNames';
import { useDrawer } from './SimonProvider';

type AppBarProps = {
  title?: string;
  leftElements?: React.ReactNode;
  rigthElements?: React.ReactNode;
  className?: string;
};

export const AppBar = ({ title, leftElements, rigthElements, className }: AppBarProps) => {
  const { z } = useDrawer();
  const classes = useStyles({ z });
  return (
    <>
      <AppBarMUI position="fixed" className={classNames([className, classes.appBar])}>
        <Toolbar>
          {leftElements}
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
          {rigthElements}
        </Toolbar>
      </AppBarMUI>
      <Toolbar />
    </>
  );
};
const useStyles = makeStyles<Theme, { z?: 'on' | 'under' }, 'title' | 'appBar'>(({ zIndex }) => ({
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: (props) => (props.z && props.z === 'on' ? zIndex.drawer - 1 : zIndex.drawer + 1),
  },
}));
