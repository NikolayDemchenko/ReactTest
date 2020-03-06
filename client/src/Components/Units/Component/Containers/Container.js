import React from "react";
import { ButtonsContainer } from "../../../Buttons/ButtonsContainer";
import BaseUnit from "../BaseUnit";
import Value from "./ContainerInput";
export default function Container(props) {
  const {
    reset,
    defaultUnit,
    dataUnit,
    setDataUnit,
    removeUnit,
    buttonColor
  } = props;
  console.log("buttonColor", buttonColor);
  const remove = removeUnit !== undefined ? removeUnit : reset;

  const container =
    dataUnit !== undefined &&
    dataUnit.value !== undefined &&
    dataUnit.value instanceof Array
      ? dataUnit.value
      : [];

  const addChild = () => {
    const index = container === [] ? 0 : container.length;
    const unit = {
      ...dataUnit,
      value: [...container, { ...defaultUnit, index }]
    };
    setDataUnit(unit);
  };
  const ContainerPanel = () => {
    return (
      <div>
        <div />
      </div>
    );
  };
  return (
    <div>
      <ContainerPanel />
      <div>
        <BaseUnit {...props} removeUnit={remove} />
        <ButtonsContainer
          Plus={{
            onClick: addChild,
            color: dataUnit.btnColor
              ? dataUnit.btnColor.active
              : buttonColor.active
          }}
        />
      </div>
      <Value
        {...props}
        buttonColor={dataUnit.btnColor ? dataUnit.btnColor : buttonColor}
        units={container}
      />
    </div>
  );
}
