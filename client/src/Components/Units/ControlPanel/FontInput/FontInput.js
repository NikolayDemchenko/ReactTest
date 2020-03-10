import React from "react";
import FamilyInput from "../../Component/Select";
import Fonts from "../../Class/Fonts";
import ColorInput from "../ColorInput";
import AlignInput from "./AlignInput";
import StyleInput from "./StyleInput";
export default function FontInput({ font, setFont, btnColor }) {
  const { family, size, color, align,style } = font;
  const setFamily = family => {
    setFont({ ...font, family });
    console.log("font.family", family);
  };
  const setColor = color => {
    setFont({ ...font, color });
    console.log("font.color", color);
  };
  const setFontSize = size => {
    setFont({ ...font, size });
    console.log("font.size", size);
  };
  const setStyle = style => {
    setFont({ ...font, style });
    console.log("font.style", style);
  };
  
  const setAlign = align => {
    setFont({ ...font, align });
    console.log("font.align", align);
  };
  let input;
  return (
    <div>
      {/* Выбор шрифта */}
      <FamilyInput
        listItems={Fonts}
        defaultItem={family}
        setItem={type => setFamily(type.value)}
      />
      {/* Размер шрифта */}
      <input
        type={"number"}
        ref={node => {
          input = node;
        }}
        onChange={() => {
          setFontSize(input.value);
        }}
        defaultValue={size}
      />   
      <StyleInput setStyle={setStyle} style={style} btnColor={btnColor} />    
      <ColorInput setColor={setColor} color={color} />    
      <AlignInput setAlign={setAlign} align={align} btnColor={btnColor} />
    </div>
  );
}
