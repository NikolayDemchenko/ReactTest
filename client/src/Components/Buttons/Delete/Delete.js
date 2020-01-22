import React from "react";
import { bin } from "react-icons-kit/icomoon/bin";
import Button from "Components/Buttons/Button";
import controlStyle from '../../../Styles/ControlStyle.module.css'

export default ({onClick}) => {
  return <Button style={controlStyle.Crud} onClick={onClick} size={"100%"} icon={bin} />;
};