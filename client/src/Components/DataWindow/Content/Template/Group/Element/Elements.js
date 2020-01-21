import React from "react";
import Element from "./Element";

export default ({ checkBtnTrue, elements, changeName, remove }) => {
  return elements.map(element => (
    <Element
      key={element.id}
      name={element.name}  
      remove={()=>remove(element)}
      checkBtnTrue={checkBtnTrue}
      changeName={name => changeName(name, element)}
    />
  ));
};
