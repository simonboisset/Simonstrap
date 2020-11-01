import { AppBar as AppBarMUI, makeStyles, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

export const AppBar: React.FC<{
  title?: string;
  leftElements?: React.ReactNode;
  rigthElements?: React.ReactNode;
}> = ({ title, leftElements, rigthElements }) => {
  const classes = useStyles();
  return (
    <AppBarMUI position="fixed" className={classes.appBar}>
      <Toolbar>
        {leftElements}
        <div className={classes.title}>
          <Typography variant="h6">{title}</Typography>
        </div>
        {rigthElements}
      </Toolbar>
    </AppBarMUI>
  );
};
const useStyles = makeStyles(({ zIndex }) => ({
  title: {
    flexGrow: 1
  },
  appBar: {
    zIndex: zIndex.drawer + 1
  }
}));
