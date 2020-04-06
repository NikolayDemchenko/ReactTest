import React from "react";
import Styles from './Styles'
import StylePropValueSelector from './StylePropValueSelector'
import StringInput from "../Inputs/StringInput";
import Color from "../Inputs/Color";
import NumberSlider from "../Inputs/NumberSlider";
function InputSwitch(props) {
  // const { value } = props;

  switch (StylePropValueSelector(props.value)) {
    case "object":
      return <Styles style={props.style} setStyle={props.setStyle} />;
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
