import React,{useState} from "react";
// import Container from "./Containers/Container";
export default function Unit({ unit, setUnit, setPanel }) {
  const parseColor = array =>
    `rgba(${array[0]}, ${array[1]},${array[2]}, ${array[3]})`;
  const parseNumberToPX = num => `${num}px`;

  const fontSize = parseNumberToPX(unit.name.font.size);
  const fontColor = parseColor(unit.name.font.color);
  const unitColor = parseColor(unit.color);
  const setName = name => {
    setUnit({ ...unit, name });
    console.log("setName", name);
  };
  // setPanel({ text: unit.name, setText: name => 
  //   setUnit({ ...unit, name }) })
  return (
    <div 
    // style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
    >
      <input
        onClick={() => setPanel({ text: unit.name, setText:setName })}
        style={{
          width: "100%",
          fontFamily: unit.name.font.family,
          fontWeight: unit.name.font.style.weight ? 7 * 100 : 4 * 100,
          fontStyle: unit.name.font.style.italic ? "italic" : "normal",
          textDecoration: unit.name.font.style.decoration
            ? "underline"
            : "none",
          textAlign: unit.name.font.align,
          fontSize: fontSize,
          color: fontColor,
          backgroundColor: unitColor
        }}
        value={unit.name.value }
        onChange={event => {
          setUnit({
            ...unit,
            name: { ...unit.name, value: event.target.value }
          });       
          console.log('!!!!!!unit.name', event.target.value)
          setPanel({ text: { ...unit.name, value: event.target.value }, setText:setName }); 
        }}
      />
    </div>
  );
}
