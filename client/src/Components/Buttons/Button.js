import React from "react";
import Icon from "react-icons-kit";
import defaultStyle from "./Buttons.module.css";

export default ({onClick,size,icon,style=defaultStyle.Button}) => { 
  return (
    <div onClick={onClick} className={style}>
      <Icon size={size} icon={icon} />
    </div>
  );
};