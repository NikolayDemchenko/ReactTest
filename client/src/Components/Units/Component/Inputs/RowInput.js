import React from "react";
// import Container from "./Containers/Container";
export default function Unit({ text, setText, setPanel }) {
  const parseColor = array =>
    `rgba(${array[0]}, ${array[1]},${array[2]}, ${array[3]})`;
  const parseNumberToPX = num => `${num}px`;

  const fontSize = parseNumberToPX(text.font.size);
  const fontColor = parseColor(text.font.color);
  const backColor = parseColor(text.color);

  return (
    <input
      onClick={() => setPanel({ text, setText })}
      style={{
        width: "100%",
        fontFamily: text.font.family,
        fontWeight: text.font.style.weight ? 7 * 100 : 4 * 100,
        fontStyle: text.font.style.italic ? "italic" : "normal",
        textDecoration: text.font.style.decoration ? "underline" : "none",
        textAlign: text.align,
        fontSize: fontSize,
        color: fontColor,
        backgroundColor: backColor
      }}
      value={text.value}
      onChange={event => {
        setText({ ...text, value: event.target.value });
        console.log("!!!!!!unit.name", event.target.value);
        setPanel({ text: { ...text, value: event.target.value }, setText });
      }}
    />
  );
}
