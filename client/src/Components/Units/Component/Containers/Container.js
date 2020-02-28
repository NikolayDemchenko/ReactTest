import React from "react";
import { ButtonsContainer } from "../../../Buttons/ButtonsContainer";
import BaseUnit from "../BaseUnit";
import DataUnit from "../DataUnit";
export default function Container({
  style,
  dataUnit,
  setDataUnit,
  parent,
  updateParent
}) {
  const {
    // contStyle,
    // nameContStyle,
    // nameBtnStyle,
    setsContStyle,
    setsBtnStyle
  } = style;
  const defaultUnit = {
    nameVisible: true,
    nameValue: null,
    type: "cont",
    bColor: "grey",
    color: "white",
    visible: true
  };
  const updateUnit = newUnit => {
    console.log("newUnit", newUnit);
    setDataUnit(newUnit);
    if (parent !== undefined) {
      const newParentValue = parent.value.map(unit => {
        console.log("unit.index", unit.index);
        console.log("unit", unit);
        console.log("newUnit.index", newUnit.index);
        if (unit.index === dataUnit.index) {
          return { ...newUnit };
        } else {
          return unit;
        }
      });
      updateParent({
        ...parent,
        value: newParentValue
      });
    }
  };
  const container = dataUnit.value !== undefined ? dataUnit.value : [];
  const addUnit = () => {
    const index = container === [] ? 0 : container.length;
    const newUnit = {
      ...dataUnit,
      value: [...container, {...defaultUnit,index}]
    };
    updateUnit(newUnit);
  };
  console.log("Unit", dataUnit);
  // console.log("parent", parent);
  // console.log("updateParent", updateParent);

  const Data = () =>
    container.map(unit => (
      <DataUnit
        parent={dataUnit}
        updateParent={setDataUnit}
        key={unit.index}
        // key={container.findIndex(i => i === unit)}
        unit={unit}
      />
    ));
  return (
    <div>
      <div>
        <BaseUnit
          style={style}
          dataUnit={dataUnit}
          setDataUnit={setDataUnit}
          updateUnit={updateUnit}
        />
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
