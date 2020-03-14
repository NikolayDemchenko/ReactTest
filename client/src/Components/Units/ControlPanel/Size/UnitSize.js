import React,{useState} from "react";
import Size from "../ModalWindows/VerticalSlider";
import Select from "../ModalWindows/Select";
import cssUnits from '../../Class/CssUnits'
export default function UnitSize({ setValue, value, btnColor, children }) {
  const parseNumber = value => {
    const newVal = value.match(/\d/gm);
    return newVal ? newVal.join("") : "";
  };
  const parseString = value => {
    const newVal = value.match(/\D/gm);
    return newVal ? newVal.join("") : "";
  };

  const [state, setstate] = useState(parseString(value))

  const setVal = value => {
    setValue( value + state );
  };
  const setUnit = state => {
    setstate(state.value)
    setValue(parseNumber(value) + state.value );   
  };
  return (
    <div
      style={{
        display: "inline-flex"
      }}
    >
      <Size setValue={setVal} value={parseNumber(value)} btnColor={btnColor}>
        {children}
      </Size>
      <Select defaultItem={parseString(value)} setItem={setUnit} listItems={cssUnits}/>
    </div>
  );
}
