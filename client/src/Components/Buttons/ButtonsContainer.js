import {StateButton, Check, Plus, Delete, Undo, Save } from "./ClearButtons";
import React from "react";
const buttons = { Check, Plus, Delete, Undo, Save };
export default function ButtonsContainer(props) {
  const btns = [];
  for (const prop in props) {
    for (const btn in buttons) {
      if (btn === prop) {
        btns.push(<StateButton
          key={prop}
          Component={buttons[btn]}
          onClick={props[prop].onClick}
          style={props.buttonStyle}
          state={props[prop].state}
        />);     
      }
    }
  }
  return <div className={props.containerStyle}>{btns}</div>;
}
