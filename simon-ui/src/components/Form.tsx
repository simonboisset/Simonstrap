import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { FormProvider, UseFormMethods } from 'react-hook-form';

export default function Form({
  children,
  methods,
  onSubmit,
  xs,
}: {
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: JSX.Element | JSX.Element[];
  methods: UseFormMethods<any>;
  onSubmit: (data: any) => void;
}) {
  const classes = useStyles();
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container className={classes.form} justify="center">
          <Grid container item xs={xs ? xs : 4}>
            {children}
          </Grid>
        </Grid>
      </form>
    </FormProvider>
  );
}
const useStyles = makeStyles(({ spacing }) => ({
  form: {
    padding: spacing(2),
  },
}));
