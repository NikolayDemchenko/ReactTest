import React from "react";
import {checkmark} from 'react-icons-kit/icomoon/checkmark'
import Button from "../Button";
export default (props) => {
  return <Button {...props} size={"100%"} icon={checkmark} />;
};