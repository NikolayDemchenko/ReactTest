import React from "react";
import Input from './Input'
function InputSwitch(props) {
  const { value } = props;

  const parseNumber = value => {
    console.log("value", typeof value);
    if (typeof value === "string") {
      const newVal = value.match(/\d/gm);
      console.log("newValNumber", newVal);
      return newVal ? Number(newVal.join("")) : null;
    } else {
      return value;
    }
  };

  if (typeof parseNumber(value) === "number") {
    console.log('value', value)
    return <Input {...props} />;
  }else{
    console.log('Хуй', value)
    return <Input {...props} />;
  }
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
