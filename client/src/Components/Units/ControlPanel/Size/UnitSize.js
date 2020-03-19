import React, { useState } from "react";
import VerticalSlider from "../ModalWindows/VerticalSlider";
import Select from "../ModalWindows/Select";
import cssUnits from "../../Class/CssUnits";
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

  const [state, setstate] = useState(parseString(value));

  const setVal = value => {
    setValue(value + state);
  };
  const setUnit = state => {
    setstate(state.value);
    setValue(parseNumber(value) + state.value);
  };
  return (
    <div
      style={{
        display: "inline-flex"
      }}
    >
      <VerticalSlider
        reload={reload}
        setValue={setVal}
        value={parseNumber(value)}
        btnColor={btnColor}
      >
        {children}
      </VerticalSlider>
      <Select
        defaultItem={parseString(value)}
        setItem={setUnit}
        listItems={cssUnits}
      />
    </div>
  );
}
