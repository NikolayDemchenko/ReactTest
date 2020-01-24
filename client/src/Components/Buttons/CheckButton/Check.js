import React from "react";
import {checkmark} from 'react-icons-kit/icomoon/checkmark'
import Button from "../Button";
import controlStyle from '../../../Styles/ControlStyle.module.css'
export default ({onClick,style=controlStyle.Crud}) => {
  return <Button style={style} onClick={onClick} size={"100%"} icon={checkmark} />;
};