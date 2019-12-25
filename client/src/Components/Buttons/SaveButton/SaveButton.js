import React from "react";
import { floppyDisk } from "react-icons-kit/icomoon/floppyDisk";
import Button from "Components/Buttons/Button";
export default ({value,style,onClick}) => {
  if(value!==null){
    return <Button style={style} onClick={onClick} size={"2em"} icon={floppyDisk} />;
  }else{
    return <Button style={style}  size={"1em"} icon={floppyDisk} />;
  }
};
