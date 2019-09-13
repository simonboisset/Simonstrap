import React from 'react';
import './styles/Icon.css';
interface Props {
  children: string | undefined,
  size: string | undefined,
  color: string | undefined,
  style: React.CSSProperties
}

export default function Icon(props: Props) {
  const style = {
    color: props.color,
    fontSize: props.size,
    ...props.style
  }
  return (<i className="simonIcon" style={style}>{props.children}</i>);
}
