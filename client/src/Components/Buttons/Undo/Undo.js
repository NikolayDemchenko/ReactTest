import React from "react";
import {undo} from 'react-icons-kit/icomoon/undo'
import Button from "Components/Buttons/Button";
export default (props) => {
  return <Button {...props} size={"100%"} icon={undo} />;
};