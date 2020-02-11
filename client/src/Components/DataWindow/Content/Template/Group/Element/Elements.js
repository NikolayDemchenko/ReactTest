import React from "react";
import { useMutation } from "@apollo/react-hooks";
import Element from "./Element";
import upOrCrGroup from "../../../../../../Function/UpdateOrCreate";
import { ADD_ELEMENT, UPDATE_ELEMENT, DELETE_ELEMENT } from "./Queries";
export default ({ checkBtnTrue, data, changeName, setAdd,refetch }) => {  
  const {template,group}=data
  const [createElement] = useMutation(ADD_ELEMENT);
  const [updateElement] = useMutation(UPDATE_ELEMENT);
  const [deleteElement] = useMutation(DELETE_ELEMENT);
  const removeElement = element => {
    // if (typeof variables.id !== "number") {
    // }
    deleteElement({ variables:{template,group,element} });
    setAdd(true);
    // refetch();
  };
  const save = item => {
    upOrCrGroup(createElement, updateElement, item);
    refetch();
  };  
  // console.log("!!!!!!!!!!!!!Сейвится",data.group);
  return data.group.elements !== undefined
    ? data.group.elements.map(element => (
        <Element
          key={element.id}
          data={{element,...data}}
          save={save}
          setAdd={setAdd}
          remove={() => removeElement(element)}
          checkBtnTrue={checkBtnTrue}
          changeName={name => changeName(name, element)}
        />
      ))
    : null;
};
