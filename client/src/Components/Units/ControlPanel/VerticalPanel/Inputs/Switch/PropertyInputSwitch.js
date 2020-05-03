import React from "react";
// import PropertiesPanel from '../../StylePanel/PropertiesPanel'
import StylePropValueSelector from "./PropertyValueSelector";
import Color from "../Color";
import NumberSlider from "../NumberSlider";
import MultiInput from "../MultiInput";
import FuncInput from "../FuncInput";
function InputSwitch(props) {
  // const { value } = props;
  // console.log('inputType', StylePropValueSelector(props.value))
  switch (StylePropValueSelector(props.value)) {
    // case "object":
    //   return <PropertiesPanel {...props} />;
    case "multi":
      return <MultiInput {...props} />;
    case "color":
      return <Color {...props} />;
    case "number":
      return <NumberSlider {...props} />;
    case "func":
      return <FuncInput {...props} />;
    // case "string":
    default:
      return null;
  }
}

export default InputSwitch;
