import React, { useState } from 'react';

import { ChromePicker } from 'react-color';

export default function ColorPicker({ value, setValue, setPreview }) {
  const [color, setColor] = useState(value);

  // console.log('%cColorPicker',`background-color:${value}`,value )

  // useEffect(() => {
  //   console.log("useEffect in");
  //   setColor(value);
  //   return () =>{
  //     console.log("useEffect out");
  // };
  // }, [value]);

  const swichColorType = (color) => {
    if (color.rgb.a !== 1) {
      return `rgba(${Object.values(color.rgb).join(",")})`;
    } else {
      return color.hex;
    }
  };
  
  const setNewColor = (color) => {
    const newColor = swichColorType(color);
    setColor(newColor);
    setPreview(newColor);
  };
  return (
    <ChromePicker
      color={color}
      onChange={setNewColor}
      onChangeComplete={(color) => {        
        setValue(swichColorType(color),`\nonChangeComplete-ChromePicker`);
      }}
    />
  );
}
