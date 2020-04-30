import React, { useState } from "react";
import { ChromePicker } from "react-color";
export default function ColorPicker({ value, setValue, setPreview }) {
  const [color, setColor] = useState(value);
  console.log('color',color)
  return (
    <ChromePicker
      color={color}
      onChange={(color) => {
        setColor(color);
        setPreview(`rgba(${Object.values(color.rgb).join(",")})`);
      }}
      onChangeComplete={() => {
        {color&&setValue(`rgba(${Object.values(color.rgb).join(",")})`);
      }}}
    />
  );
}
