import { Grid, makeStyles, TextField } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export const InputText: React.FC<{
  name: string;
  label?: string;
  type?: 'password';
  space?: boolean;
  inputProps?: any;
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}> = ({ name, label, type, inputProps, space, xs }) => {
  const { errors, control } = useFormContext();
  const classes = useStyles();
  return (
    <Grid item xs={xs ? xs : 12} className={space ? classes.input : classes.nospace}>
      <Controller
        as={TextField}
        name={name}
        control={control}
        variant="outlined"
        label={label}
        fullWidth
        type={type}
        error={!!errors[name]}
        helperText={errors[name]?.message}
        InputProps={inputProps}
      />
    </Grid>
  );
};
const useStyles = makeStyles(({ spacing }) => ({
  input: {
    paddingTop: spacing(2)
  },
  nospace: {
    paddingTop: spacing(0)
  }
}));
