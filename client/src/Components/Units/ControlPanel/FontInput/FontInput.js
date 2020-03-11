import React, { useContext } from "react";
import { ControlsContext } from "../ControlsContext";
import Size from "../Sliders/VerticalSlider";
import Family from "../Select";
import Fonts from "../../Class/Fonts";
import Color from "../ColorInput";
import Align from "./AlignInput";
import Style from "./StyleInput";
export default function FontInput({ font, setFont }) {
  const { btnColor } = useContext(ControlsContext);
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
    <div style={{ display: "inline-flex" }}>
      {/* Выбор шрифта */}
      <Family
        listItems={Fonts}
        defaultItem={family}
        setItem={type => setFamily(type.value)}
      />
      <Size setValue={setFontSize} value={size} btnColor={btnColor} />
      <Color setColor={setColor} color={color} />
      <Style setStyle={setStyle} style={style} btnColor={btnColor} />
      <Align setAlign={setAlign} align={align} btnColor={btnColor} />
    </div>
  );
}
