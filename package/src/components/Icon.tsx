import React from 'react';

interface Props {
  children: string | undefined,
  size: string | undefined,
  color: string | undefined,
  style: React.CSSProperties
}

export default function Icon(props: Props) {
  const style = {
    margin: "0",
    fontFamily: "Material Icons",
    fontStyle: "normal",
    color: props.color,
    fontSize: props.size,
    display: "inline-block",
    lineHeight: "1",
    letterSpacing: "normal",
    fontFeatureSettings: 'liga',
    ...props.style
  }
  return (<i style={style}>{props.children}</i>);
}
