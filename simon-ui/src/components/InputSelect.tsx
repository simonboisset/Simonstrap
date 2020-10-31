import { FormControl, FormHelperText, Grid, Icon, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

export type ItemSelectType<T> = { name?: string; value: T; icon?: string };

export const InputSelect: React.FC<{
  name: string;
  label?: string;
  items: ItemSelectType<string>[];
  xs?: boolean | 2 | 'auto' | 1 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}> = ({ name, label, items, xs }) => {
  const { errors, control } = useFormContext();

  return (
    <Grid item xs={xs ? xs : 12}>
      <Controller
        render={props => (
          <FormControl variant="outlined" fullWidth>
            <InputLabel>{label}</InputLabel>
            <Select value={props.value} onChange={props.onChange} label={label} error={!!errors[name]}>
              <MenuItem value={undefined} disabled>
                {label}
              </MenuItem>
              {items.map(item => (
                <MenuItem key={item.value} value={item.value}>
                  {item.icon && <Icon>{item.icon}</Icon>}
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText error={!!errors[name]}>{errors[name]?.message}</FormHelperText>
          </FormControl>
        )}
        name={name}
        control={control}
      />
    </Grid>
  );
};