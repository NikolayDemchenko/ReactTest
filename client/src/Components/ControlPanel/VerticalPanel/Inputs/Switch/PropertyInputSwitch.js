import React from "react";
import PropertyValueSelector from "./PropertyValueSelector";
import Color from "../Color";
import NumberSlider from "../NumberSlider";
import MultiInput from "../MultiInput";
import FuncInput from "../FuncInput";

function PropertyInputSwitch(props) {

  switch (PropertyValueSelector(props)) {

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
