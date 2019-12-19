import React from "react";
import { floppyDisk } from "react-icons-kit/icomoon/floppyDisk";
import Button from "Components/Buttons/Button";

export default ({onClick}) => {
  return <Button onClick={onClick} size={"2em"} icon={floppyDisk} />;
};
