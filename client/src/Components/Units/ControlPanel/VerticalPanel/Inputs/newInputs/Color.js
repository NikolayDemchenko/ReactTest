import React, { useState } from "react";
import { ChromePicker } from "react-color";
export default function ColorPicker({ value, setValue, setPreview }) {
  const [color, setColor] = useState(value);
  // console.log('color')
  return (
    <ChromePicker
      color={color}
      onChange={(color) => {
        setColor(color);
        setPreview(`rgba(${Object.values(color.rgb).join(",")})`);
      }}
      onChangeComplete={() => {
        setValue(`rgba(${Object.values(color.rgb).join(",")})`);
      }}
    />
  );
}
