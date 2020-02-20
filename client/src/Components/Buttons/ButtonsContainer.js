import {StateButton, buttons } from "./ButtonsList";
import React from "react";
import CrudButton from"./CrudButton.module.css"
export {CrudButton};
export  function ButtonsContainer(props) {
  const btns = [];
  for (const prop in props) {
    for (const btn in buttons) {
      if (btn === prop) {
        btns.push(<StateButton
          key={prop}
          Component={buttons[btn]}
          onClick={props[prop].onClick}
          style={props.stateStyle}
          state={props[prop].state}
        />);     
      }
    }
  }
  return <div className={props.containerStyle}>{btns}</div>;
}