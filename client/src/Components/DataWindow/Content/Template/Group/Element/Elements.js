import React from "react";
import Element from "./Element";


export default ({ elements,changeName }) => {
  return elements.map(element => (
    <Element key={element.id} name={element.name}  onClick={null} changeName={name => changeName(name, element)} />
  ));
};
