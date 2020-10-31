import { Icon, IconButton as IconButtonMUI } from '@material-ui/core';
import React from 'react';

export const IconButton: React.FC<{
  children?: string;
  edge?: 'start' | 'end';
  color?: 'inherit' | 'primary' | 'secondary' | 'default';
  onClick?: (event: React.MouseEvent) => void;
}> = ({ children, edge, color, onClick }) => {
  return (
    <IconButtonMUI edge={edge} color={color} onClick={onClick}>
      <Icon>{children}</Icon>
    </IconButtonMUI>
  );
};
