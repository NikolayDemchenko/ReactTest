import React from "react";
import {plus} from 'react-icons-kit/icomoon/plus'
import Button from "Components/Buttons/Button";

export default ({onClick}) => {
  return <Button onClick={onClick} size={"3em"} icon={plus} />;
};
