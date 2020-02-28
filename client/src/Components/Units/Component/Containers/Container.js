import React from "react";
import { ButtonsContainer } from "../../../Buttons/ButtonsContainer";
import BaseUnit from "../BaseUnit";
import DataUnit from "../DataUnit";
export default function Container(props) {
  const { style, defaultUnit, dataUnit, updateUnit } = props;
  const { setsContStyle, setsBtnStyle } = style;

  const container =
    dataUnit !== undefined &&
    dataUnit.value !== undefined &&
    dataUnit.value instanceof Array
      ? dataUnit.value
      : [];

  const addUnit = () => {
    const index = container === [] ? 0 : container.length;
    const newUnit = {
      ...dataUnit,
      value: [...container, { ...defaultUnit, index }]
    };
    updateUnit(newUnit);
  };

  const Data = () =>
    container.map(unit => {
      return (
        <DataUnit
          parent={dataUnit}
          updateParent={updateUnit}
          key={unit.index}
          unit={unit}
        />
      );
    });
  console.log("dataUnit.nameValue", dataUnit.nameValue);
  return (
    <div>
      <div className={setsContStyle}>
        <BaseUnit {...props} />
        <ButtonsContainer
          containerStyle={setsContStyle}
          buttonStyle={setsBtnStyle}
          Plus={{
            onClick: addUnit
          }}
        />
      </div>
      <Data />
    </div>
  );
}
