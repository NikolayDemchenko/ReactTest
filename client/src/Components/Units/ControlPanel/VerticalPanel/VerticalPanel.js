import React from "react";
import Style from "./Style";
import Plus from "../../../Buttons/Plus/Plus";
export default function VerticalPanel({ controlPanel, setControlPanel }) {
  const { style } = controlPanel.unit.tagProps;

  const { unit, setUnit } = controlPanel;
  const setStyle = (style) => {
    setUnit({ ...unit, tagProps: { ...unit.tagProps, style } });
    setControlPanel({
      ...controlPanel,
      unit: { ...unit, tagProps: { ...unit.tagProps, style } },
    });
  };
  const newStyle = () => {
    setStyle({ ...style, [inputName.value]: inputValue.value });
    inputName.value = "";
    inputValue.value = "";
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      newStyle();
    }
  };
  let div;
  let inputName;
  let inputValue;

  return (
    <div
      ref={(n) => (div = n)}
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "100%",
        minWidth: "280px",
        maxWidth: "280px",
        position: "fixed ",
        zIndex: 1,
        top: "70px",
        left: 0,
        background: "#1b1f2777",
        color: "#eee",
        padding: "20px 10px",
      }}
      // onClick={() =>
      //   console.log("div", getComputedStyle(div, null).flexDirection)
      // }
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <input
          onKeyPress={handleKeyPress}
          ref={(n) => (inputName = n)}
          style={{
            outline: "none",
            border: "1px solid #abc",
            backgroundColor: "inherit",
            color: "#eee",
            width: "140px",
          }}
        ></input>
        <input
          ref={(n) => (inputValue = n)}
          style={{
            outline: "none",
            border: "1px solid #abc",
            backgroundColor: "inherit",
            width: "90px",
            margin: "0 0 0 auto",
            color: "#eee",
          }}
          onKeyPress={handleKeyPress}
        ></input>
        <div style={{cursor:"pointer", color: "#ddd", width: "20px" }} onClick={newStyle}>
          +
        </div>
      </div>
      <Style style={style} setStyle={setStyle} />
    </div>
  );
}