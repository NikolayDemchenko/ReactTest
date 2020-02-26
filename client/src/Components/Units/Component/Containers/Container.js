import React from "react";
import {
  ButtonsContainer,
  CrudButton
} from "../../../Buttons/ButtonsContainer";
// import CrudContainer from "./CrudContainer";
export default function Container({value,add}) {
  return (
    <ButtonsContainer
      containerStyle={CrudButton.Container}
      buttonStyle={CrudButton}
      Plus={{
        onClick: add     
      }}
    >{value}</ButtonsContainer>
  );
}
