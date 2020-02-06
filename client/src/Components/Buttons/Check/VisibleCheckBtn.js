import React from "react";
import {ActiveButton} from "../AllButtons";
import CheckButton from "./Check";
import controlStyle from "../../../Styles/ControlStyle.module.css";
export default ({ onClick, state }) => {
 return <ActiveButton
    onClick={onClick}
    state={state}
    active={<CheckButton style= {controlStyle.Crud} onClick={onClick}/>}
    inactive={<CheckButton style= {controlStyle.inactiveCrud}/>}
  />;
};
