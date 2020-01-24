import React from "react";
import {checkmark} from 'react-icons-kit/icomoon/checkmark'
import Button from "../Button";
import controlStyle from '../../../Styles/ControlStyle.module.css'
export default ({onClick}) => {
  return <Button style={controlStyle.Crud} onClick={onClick} size={"100%"} icon={checkmark} />;
};