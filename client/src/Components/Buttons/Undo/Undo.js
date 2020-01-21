import React from "react";
import {undo} from 'react-icons-kit/icomoon/undo'
import Button from "Components/Buttons/Button";
import controlStyle from '../../../Styles/ControlStyle.module.css'
export default ({onClick}) => {
  return <Button style={controlStyle.Crud} onClick={onClick} size={"100%"} icon={undo} />;
};