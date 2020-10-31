import { Grid } from '@material-ui/core';
import React from 'react';

export const Page: React.FC = ({ children }) => {
  return (
    <Grid container xs={12}>
      {children}
    </Grid>
  );
};
