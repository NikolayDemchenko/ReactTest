import React from "react";
import { bold } from "react-icons-kit/fa/bold";
import { italic } from "react-icons-kit/fa/italic";
import { underline } from "react-icons-kit/fa/underline";
import Button from "../../../../../Buttons/Button";
export default ({style, setStyle, btnColor }) => {
  const{weight, italic :_italic, decoration}=style
  const setWeight = () => {
    setStyle({ ...style, weight: !weight});
    console.log("font.weight", !weight);
  };
  const setItalic = () => {
    setStyle({ ...style, italic: !_italic });
    console.log("font.italic", !_italic);
  };
  const setDecoration = () => {
    setStyle({ ...style, decoration: !decoration });
    console.log("style.decoration", !decoration);
  };
  const getColor = value => {
    return value ? btnColor.on : btnColor.active;
  };
  return (
    <div style={{ display: "inline-flex" }}>
      <Button
        onClick={setWeight}
        color={getColor(weight)}
        icon={bold}
      />
      <Button
        onClick={setItalic}
        color={getColor(_italic)}
        icon={italic}
      />
      <Button
        onClick={setDecoration}
        color={getColor(decoration)}
        icon={underline}
      />
    </div>
  );
};
