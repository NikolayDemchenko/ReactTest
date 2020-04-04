import React from "react";
import PopoverInput from "./PopoverInput";
import Color from "./Color";
import VerticalSlider from "../../ModalWindows/VerticalSlider";
function InputSwitch(props) {
  const { value } = props;
  // Если есть пробел, то Строка
  if (value.match(/\s.|\//gm)) {
    // console.log("Строка", value);
    return <PopoverInput {...props} />;
  } else {
    // Если есть
    if (value.match(/\d/gm)) {
      if (value.match(/#\w+|rgba|rgb/gm)) {
        // console.log("Цвет", value);
        return <Color {...props} />;
      } else {
        // console.log("Слайдер", value);
        return <VerticalSlider {...props} />;
      }
    } else {
      // console.log("Строка", value);
      return <PopoverInput {...props} />;
    }
  }  
}

export default InputSwitch;
