import React from "react";
import Element from "./Element";

export default ({checkBtnTrue, elements, changeName }) => {
  return elements.map(element => (
    <Element
      key={element.id}
      name={element.name}
      onClick={null}
      checkBtnTrue={checkBtnTrue}
      changeName={name => changeName(name, element)}
    />
  ));
};
