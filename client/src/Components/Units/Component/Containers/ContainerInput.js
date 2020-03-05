import React from "react";
import SwitchUnit from "../SwitchUnit";
export default function ContainerInput({
  units,
  defaultUnit,
  dataUnit,
  setDataUnit,
  style
}){
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
  return units.map(unit => (
    <SwitchUnit
      key={unit.index}
      defaultUnit={defaultUnit}
      removeUnit={removeThisUnit}
      dataUnit={unit}
      setDataUnit={setThisUnit}
      style={style}
    />
  ));
};
