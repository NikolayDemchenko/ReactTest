import React from "react";
export default function RowInput({ type, text, setText }) {
  const parseColor = array =>
    `rgba(${array[0]}, ${array[1]},${array[2]}, ${array[3]})`;
  const parseNumberToPX = num => `${num}px`;

  const { size, color, family, style } = text.font;

  return (
    <input
      style={{
        border: 0,
        outline: "none",
        width: "100%",
        fontFamily: family,
        fontWeight: style.weight ? 7 * 100 : 4 * 100,
        fontStyle: style.italic ? "italic" : "normal",
        textDecoration: style.decoration ? "underline" : "none",
        textAlign: text.align,
        fontSize: parseNumberToPX(size),
        color: parseColor(color),
        backgroundColor: parseColor(text.color)
      }}
        value={text.value || ""}
      onChange={event => {
        console.log("!!!!!!unit.name", event.target.value);
        setText({ ...text, value: event.target.value });
      }}
    />
  );
}
