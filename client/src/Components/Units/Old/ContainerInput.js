import React from "react";
import SwitchUnit from "../Component/SwitchTypes";
export default function ContainerInput({
  units,
  defaultUnit,
  dataUnit,
  setDataUnit, 
  buttonColor
}) {
  const setThisUnit = child => {
    console.log("setChild", child);
    const value = units.map(unit =>
      unit.index === child.index ? { ...child } : unit
    );
    setDataUnit({ ...dataUnit, value });
  };
  console.log("units", units);
  const removeThisUnit = child => {
    console.log("removeChild", child);
    const value = units.filter(unit => unit.index !== child.index);
    setDataUnit({ ...dataUnit, value });
  };
  console.log('buttonColor', buttonColor)
  return units.map(unit => (
    <SwitchUnit
      key={unit.index}
      buttonColor={buttonColor}
      defaultUnit={defaultUnit}
      removeUnit={removeThisUnit}
      dataUnit={unit}
      setDataUnit={setThisUnit}
     
    />
  ));
}
