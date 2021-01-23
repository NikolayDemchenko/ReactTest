import React from "react";
import DataTypeRecognizer from "./DataTypeRecognizer";
import Color from "../../Color";
import NumberSlider from "../../NumberSlider";
import MultiInput from "../../MultiInput";
import FuncInput from "../../FuncInput";

function PropertyInputSwitch(props) {

  switch (props.dataType||DataTypeRecognizer(props)) {
    case "multi":
      return <MultiInput {...props} />;
    case "color":
      return <Color {...props} />;
    case "number":     
      return <NumberSlider {...props} />;
    case "func":
      return <FuncInput {...props} />;    
    default:
      return null;
  }
}

export default PropertyInputSwitch;
