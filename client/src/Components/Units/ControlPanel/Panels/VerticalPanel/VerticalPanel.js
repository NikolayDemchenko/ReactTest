import React from "react";
import Style from "./Style";
export default function VerticalPanel({ controlPanel, setControlPanel }) {
  const { style } = controlPanel.unit.tagProps;

  const { unit, setUnit } = controlPanel;
  const setStyle = style => {
    setUnit({ ...unit, tagProps: { ...unit.tagProps, style } });
    setControlPanel({
      ...controlPanel,
      unit: { ...unit, tagProps: { ...unit.tagProps, style } }
    });
  };

  let div;
  return (
    <div
      ref={n => (div = n)}
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "100%",
        minWidth: "240px",
        maxWidth: "240px",
        position: "fixed ",
        zIndex: 1,
        top: "70px",
        left: 0,
        background: "#1b1f2777",
        color: "#eee",
        padding: "20px 10px"
      }}
      // onClick={() =>
      //   console.log("div", getComputedStyle(div, null).flexDirection)
      // }
    >
      <Style style={style} setStyle={setStyle} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <input style={{ width:"145px"}}></input>
        <input style={{ width:"60px", margin: "0 0 0 auto" }}></input>
        <button>+</button>
      </div>
    </div>
  );
}
