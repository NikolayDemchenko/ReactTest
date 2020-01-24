
import React from "react";
import ActiveButton from "../ActiveButton";
import Plus from './Plus'
import controlStyle from '../../../Styles/ControlStyle.module.css'



export default ({ onClick, on_off }) => {
 return <ActiveButton
    // onClick={onClick}
    on_off={on_off}
    activeBtn={<Plus style= {controlStyle.Crud} onClick={onClick}/>}
    inactiveBtn={<Plus style= {controlStyle.inactiveCrud}/>}
  />;
};