import React from "react";
import { useMutation } from "@apollo/react-hooks";
import Element from "./Element";
import upOrCrGroup from "../../../../../../Function/UpdateOrCreate";
import { ADD_ELEMENT, UPDATE_ELEMENT, DELETE_ELEMENT } from "./Queries";
export default ({ checkBtnTrue, elements, changeName, remove,setAdd,refetch }) => {
  const [createElement] = useMutation(ADD_ELEMENT);
  const [updateElement] = useMutation(UPDATE_ELEMENT);
  const [deleteElement] = useMutation(DELETE_ELEMENT);
  const removeElement = variables => {
    if (typeof variables.id !== "number") {
      deleteElement({ variables });
    }
    setAdd(true);
    refetch();
  };
  const save = item => {
    upOrCrGroup(createElement, updateElement, item);
    refetch();
    // console.log("!!!!!!!!!!!!!Сейвится",item);
  };  
  return elements !== undefined
    ? elements.map(element => (
        <Element
          key={element.id}
          element={element}
          save={save}
          remove={() => removeElement(element)}
          checkBtnTrue={checkBtnTrue}
          changeName={name => changeName(name, element)}
        />
      ))
    : null;
};
