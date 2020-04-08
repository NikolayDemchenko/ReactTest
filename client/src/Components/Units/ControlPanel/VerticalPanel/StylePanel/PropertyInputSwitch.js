import React from "react";
import PropertiesPanel from './PropertiesPanel'
import StylePropValueSelector from './StylePropValueSelector'
import StringInput from "../Inputs/StringInput";
import Color from "../Inputs/Color";
import NumberSlider from "../Inputs/NumberSlider";
function InputSwitch(props) {
  // const { value } = props;

  switch (StylePropValueSelector(props.value)) {
    case "object":
      return <PropertiesPanel {...props} />;
    case "string":
      return <StringInput {...props} />;
    case "color":
      return <Color {...props} />;
    case "number":
      return <NumberSlider {...props} />;
    default:
      return <StringInput {...props} />;
  } 
}

export default InputSwitch;
