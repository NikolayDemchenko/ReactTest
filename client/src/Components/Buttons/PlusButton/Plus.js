import {plus} from 'react-icons-kit/icomoon/plus'
import React from "react";
import Button from "Components/Buttons/Button";
export default ({style,onClick}) => {
  return <Button style={style} onClick={onClick} size={"100%"} icon={plus} />;
};
