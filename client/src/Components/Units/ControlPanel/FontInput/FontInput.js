import React from "react";
import VerticalSlider from "../Sliders/VerticalSlider";
import FamilyInput from "../Select";
import Fonts from "../../Class/Fonts";
import ColorInput from "../ColorInput";
import AlignInput from "./AlignInput";
import StyleInput from "./StyleInput";
export default function FontInput({ font, setFont, btnColor }) {
  const { family, size, color, align, style } = font;
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
    <div style={{ display: "inline-flex"}}>
      {/* Выбор шрифта */}
      <FamilyInput
        listItems={Fonts}
        defaultItem={family}
        setItem={type => setFamily(type.value)}
        btnColor={btnColor}
      />     
      <VerticalSlider setValue={setFontSize} value={size} btnColor={btnColor} />
      <ColorInput setColor={setColor} color={color} />
      <StyleInput setStyle={setStyle} style={style} btnColor={btnColor} />
      <AlignInput setAlign={setAlign} align={align} btnColor={btnColor} />
    </div>
  );
}
