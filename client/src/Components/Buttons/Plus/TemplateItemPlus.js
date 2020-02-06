
import React from "react";
import {ActiveButton} from "../AllButtons";
import Plus from './Plus'
import controlStyle from '../../../Styles/ControlStyle.module.css'



export default ({ onClick, state }) => {
 return <ActiveButton
    // onClick={onClick}
    state={state}
    active={<Plus style= {controlStyle.Crud} onClick={onClick}/>}
    inactive={<Plus style= {controlStyle.inactiveCrud}/>}
  />;
};