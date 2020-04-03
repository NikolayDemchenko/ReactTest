import React from "react";
import PopoverInput from "./PopoverInput";
import Color from "./Color";
import VerticalSlider from "../../../ModalWindows/VerticalSlider";
function InputSwitch(props) {
  const { value } = props;
  // Если есть пробел, то Строка
  if (value.match(/\s.|\//gm)) {
    console.log("Строка", value);
    return <PopoverInput {...props} />;
  } else {
    // Если есть
    if (value.match(/\d/gm)) {
      if (value.match(/#\w+|rgba|rgb/gm)) {
        console.log("Цвет", value);
        return <Color {...props} />;
      } else {
        console.log("Слайдер", value);
        return <VerticalSlider {...props} />;
      }
    } else {
      console.log("Строка", value);
      return <PopoverInput {...props} />;
    }
  }
  // if (value.match(/#\w*|rgba|rgb/gm)) {
  //   console.log("Цвет", value);
  //   return <Color {...props} />;
  // } else {
  //   if (value.match(/\d/gm)) {
  //     if (value.match(/\s./gm)) {
  //       console.log("Инпут", value);
  //       return <PopoverInput {...props} />;
  //     } else {
  //       console.log("Слайдер", value);
  //       return <VerticalSlider {...props} />;
  //     }
  //   } else {
  //     console.log("Инпут", value);
  //     return <PopoverInput {...props} />;
  //   }
  // }

  // switch (props.prop) {
  //   case "lenght":
  //     return <PopoverInput {...props} />;
  //   case "color":
  //     return <PopoverInput {...props} />;
  //   case "link":
  //     return <PopoverInput {...props} />;
  //   default:
  //     return <PopoverInput {...props} />;
  // }
}

export default InputSwitch;
