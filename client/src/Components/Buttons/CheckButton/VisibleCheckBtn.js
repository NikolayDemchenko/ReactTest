import React from "react";
import ActiveButton from "../ActiveButton";
import CheckButton from "./Check";
import controlStyle from "../../../Styles/ControlStyle.module.css";
export default ({ onClick, on_off }) => {
 return <ActiveButton
    onClick={onClick}
    on_off={on_off}
    activeBtn={<CheckButton style= {controlStyle.Crud} onClick={onClick}/>}
    inactiveBtn={<CheckButton style= {controlStyle.inactiveCrud}/>}
  />;
};
