import React from "react";
import Button from "Components/Buttons/Button";
import {folderPlus} from 'react-icons-kit/feather/folderPlus'
export default (props) => {
  return <Button {...props} size={"60%"} icon={folderPlus} />;
};
