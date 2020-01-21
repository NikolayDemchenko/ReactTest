import React from "react";
import {pencil} from 'react-icons-kit/icomoon/pencil'
import Button from "Components/Buttons/Button";

export default ({style,onClick}) => {
  return <Button style={style} onClick={onClick} size={"2em"} icon={pencil} />;
};