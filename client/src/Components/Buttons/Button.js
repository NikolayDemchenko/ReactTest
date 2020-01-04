import React from "react";
import Icon from "react-icons-kit";
import buttonStyle from "./Buttons.module.css";

export default ({onClick,size,icon,style=buttonStyle.Default}) => { 
  return (
    <div onClick={onClick} className={style}>
      <Icon size={size} icon={icon} />
    </div>
  );
};