import React from "react";
import { bin } from "react-icons-kit/icomoon/bin";
import Button from "Components/Buttons/Button";

export default ({onClick}) => {
  return <Button onClick={onClick} size={"2em"} icon={bin} />;
};
