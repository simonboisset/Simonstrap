import React from 'react';
import './styles/Button.css';
export interface Props {
  width: string,
  height: string,
  backgroundColor: string,
  onClick: Function,
  children: string,
  elevation: number,
  variant: "contained" | "default",
  type: "default" | "rounded" | "icon",
  style: React.CSSProperties
}

export default function Button(props: Props) {
  const style: React.CSSProperties = {
    width: props.width,
    height: props.height,
    color: "white",
    backgroundColor: props.backgroundColor,
    ...props.style
  }
  return (
    <button style={style} className="simonButton"
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  );
}

Button.defaultProps = {
  width: "250px",
  height: "50px",
  backgroundColor: "red",
  elevation: 2,
  variant: "default",
  type: "default",
  onClick: function () { return null }
};