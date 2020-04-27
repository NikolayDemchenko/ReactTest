import React, { useState, useEffect } from "react";
import VerticalSlider from "../../../ModalWindows/VerticalSlider";
// import Select from "../../../ModalWindows/Select";
// import cssUnits from "../../../../Class/CssUnits";
export default function UnitSize({
  setValue,
  value,
  btnColor,
  children,
  reload
}) {
  const parseNumber = value => {
    const newVal = value.match(/\d/gm);
    return newVal ? Number(newVal.join("")) : 0;
  };
  const parseString = value => {
    const newVal = value.match(/\D/gm);
    return newVal ? newVal.join("") : "";
  };

  const setVal = item => {
    setValue(item + parseString(value));
    // console.log("Еденица измерения", state);
  };
  // const setUnit = item => {  
  //   setValue(parseNumber(value) + item.value);
  // };

  return (
    <div
      style={{
        display: "inline-flex"
      }}
    >
      <VerticalSlider
        reload={reload}
        setValue={setValue}
        value={value}
        btnColor={btnColor}
      >
        {children}
      </VerticalSlider>


      {/* <Select
        defaultItem={parseString(value)}
        setItem={setUnit}
        listItems={cssUnits}
      /> */}
    </div>
  );
}