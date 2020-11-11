import { css } from 'emotion';
import React from 'react';
import { useDrawer } from './SimonProvider';

export const Page = ({
  header,
  drawer,
  children,
}: {
  header?: JSX.Element;
  drawer?: JSX.Element;
  children: React.ReactNode;
}) => {
  const { width } = useDrawer();
  return (
    <>
      {header}
      {drawer}
      <div className={pageStyle(width)}>{children}</div>
    </>
  );
};

const pageStyle = (width: number) =>
  css({
    marginLeft: width + 16,
    marginBottom: 16,
    marginTop: 16,
    marginRight: 16,
  });
