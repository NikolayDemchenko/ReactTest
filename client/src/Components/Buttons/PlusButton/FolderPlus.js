import React from "react";
import Button from "Components/Buttons/Button";
import {folderPlus} from 'react-icons-kit/feather/folderPlus'
export default ({style,onClick}) => {
  return <Button style={style} onClick={onClick} size={"35%"} icon={folderPlus} />;
};
