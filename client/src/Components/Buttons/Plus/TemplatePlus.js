import React from "react";
import Button from "../Button";
import {ic_add_to_queue} from 'react-icons-kit/md/ic_add_to_queue'
export default (props) => {
  return <Button {...props} size={"60%"} icon={ic_add_to_queue} />;
};
