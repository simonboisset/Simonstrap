import React from 'react';
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
  const [click, setClick] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const [style, setStyle] = React.useState({});
  function setAll(value: boolean) {
    setHover(value);
    setClick(value);
  }
  React.useEffect(() => {
    let elevation: number;
    if (click) {
      elevation = props.elevation;
    }
    else {
      if (hover) {
        elevation = props.elevation + 1;
      }
      else {
        elevation = props.elevation;
      }
    }
    setStyle({
      margin: "10px",
      fontSize: "20px",
      fontStyle: "normal",
      width: props.width,
      height: props.height,
      color: "white",
      border: "none",
      borderRadius: "3px",
      backgroundColor: props.backgroundColor,
      outline: "none",
      transition: "background-color 300ms, box-shadow 300ms",
      boxShadow: `0 ${elevation}px ${2 * elevation}px rgba(0,0,0,0.${8 * elevation})`,
      ...props.style
    });
  }, [click, hover]);

  return (
    <button
      style={style}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setAll(false)}
      onMouseUp={() => setClick(false)}
      onMouseDown={() => setClick(true)}
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