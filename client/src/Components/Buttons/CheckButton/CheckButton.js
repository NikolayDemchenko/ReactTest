import React from "react";
import {checkmark} from 'react-icons-kit/icomoon/checkmark'
import Button from "Components/Buttons/Button";

export default ({style,onClick}) => {
  return <Button style={style} onClick={onClick} size={"2em"} icon={checkmark} />;
};