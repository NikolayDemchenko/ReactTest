import React from "react";
import {checkmark} from 'react-icons-kit/icomoon/checkmark'
import Button from "../Button";
export default (props) => {
  return <Button {...props}  icon={checkmark} />;
};