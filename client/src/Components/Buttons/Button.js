import React from "react";
import Icon from "react-icons-kit";
import style from "./Buttons.module.css";

export default ({onClick,size,icon}) => { 
  return (
    <div onClick={onClick} className={style.Button}>
      <Icon size={size} icon={icon} />
    </div>
  );
};