import React from "react";
import { SketchPicker } from 'react-color';
export default function ColorInput({ color, setColor }) {
  // function componentToHex(c) {
  //   var hex = c.toString(16);
  //   return hex.length == 1 ? "0" + hex : hex;
  // }

  // function rgbToHex(color) {
  //   return (
  //     "#" +
  //     componentToHex(color[0]) +
  //     componentToHex(color[1]) +
  //     componentToHex(color[2])
  //   );
  // }

  // function hexToRgb(hex) {
  //   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  //   return result
  //     ? {
  //         r: parseInt(result[1], 16),
  //         g: parseInt(result[2], 16),
  //         b: parseInt(result[3], 16)
  //       }
  //     : null;
  // }
  color = color !== undefined ? color : [150, 170, 230, 1];

  // const setRGB = value => {
  //   const rgb = hexToRgb(value);
  //   const newColor = [];
  //   newColor.push(rgb.r);
  //   newColor.push(rgb.g);
  //   newColor.push(rgb.b);
  //   newColor.push(color[3]);
  //   console.log('newColor', newColor)   
  //   setColor(newColor);
  // };
  // const setAlpha = alpha => {
  //   const newColor = [...color];
  //   newColor[3] = alpha;
  //   setColor(newColor);
  // };
  // let colorInput;
  // let alphaInput;
  const _setColor = rgb => {
    setColor([rgb.r,rgb.g,rgb.b,Math.round(rgb.a*100)]);
  };
const rgb={r:color[0],g:color[1],b:color[2],a:color[3]/100}
  return (
    <div>
      Цвет
      <SketchPicker  color={rgb}
        onChange={color => {
          _setColor(color.rgb);
        }}/>
      {/* <input
        type={"color"}
        ref={node => {
          colorInput = node;
        }}
        onChange={() => {
          setRGB(colorInput.value);     
        }}
        defaultValue={rgbToHex(color)}
      />
      Прозрачность
      <input
        type={"number"}
        ref={node => {
          alphaInput = node;
        }}
        onChange={() => {
          setAlpha(alphaInput.value); 
        }}
        min="0"
        max="100"
        defaultValue={color[3]}
      /> */}
    </div>
  );
}
