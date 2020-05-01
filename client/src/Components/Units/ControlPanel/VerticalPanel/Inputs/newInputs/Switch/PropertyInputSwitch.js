import React from "react";
import PropertiesPanel from '../../../StylePanel/PropertiesPanel'
import StylePropValueSelector from './StylePropValueSelector'
import StringInput from "../../OldInputs/StringInput";
import Color from "../Color";
import NumberSlider from "../NumberSlider";
function InputSwitch(props) {
  // const { value } = props;
// console.log('inputType', StylePropValueSelector(props.value))
  switch (StylePropValueSelector(props.value)) {
    case "object":
      return <PropertiesPanel {...props} />;
    case "string":
      return null;
    case "color":
      return <Color {...props} />;
    case "number":   
      return <NumberSlider {...props} />;
    default:
      return <StringInput {...props} />;
  } 
}

export default InputSwitch;
