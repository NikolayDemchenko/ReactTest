import React from "react";
import { floppyDisk } from "react-icons-kit/icomoon/floppyDisk";
import Button from "Components/Buttons/Button";
export default ({style,onClick}) => {  
    return <Button style={style} onClick={onClick} size={"100%"} icon={floppyDisk} />;
};
