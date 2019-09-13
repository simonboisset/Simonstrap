import React from 'react';
import './styles/Button.css';
export interface Props {
  width: string,
  height: string,
  backgroundColor: string,
  onClick: Function,
  children: string,
  elevation: number,
  rounded: boolean,
  icon: boolean,
  variant: "contained" | "default",
  type: "default" | "rounded" | "icon",
  style: React.CSSProperties
}

export default function Button(props: Props) {
  const style: React.CSSProperties = {
    backgroundColor: props.backgroundColor,
    ...props.style
  }
  let className = "simonButton";
  if (props.rounded) {
    className += " rounded";
  }
  if (props.icon) {
    className += " circle";
  }
  return (
    <button style={style} className={className}
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