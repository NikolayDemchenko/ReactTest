import React from "react";
import PropertiesPanel from '../../StylePanel/Panel'
import StylePropValueSelector from './StylePropValueSelector'
import StringInput from "../StringInput";
import Color from "../Color";
import NumberSlider from "../NumberSlider";
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
