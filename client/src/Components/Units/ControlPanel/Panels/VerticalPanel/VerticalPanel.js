import React from "react";
export default function BasePanel({ controlPanel, setControlPanel }) {
  const { style } =
    controlPanel !== undefined ? controlPanel.unit.tagProps : false;

  const Settings = () => {
    if (style) {
      const settings = [];
      for (var key in style) {
        settings.push(
          <div key={key} style={{ display: "flex",flexWrap:"wrap" }}>
            <div style={{ marginLeft: "2px" }}>{key} : </div>
            <div style={{ margin: "0 0 2px auto" }}> {style[key]}</div>
          </div>
        );
      }
      return settings;
    } else {
      return <div />;
    }
  };
  let div;

  return (
    <div
      ref={node => {
        div = node;
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        height: "100%",
        minWidth: "180px",
        maxWidth: "180px",
        position: "sticky ",
        zIndex: 1,
        top: "70px",
        left: 0,
        background: "#1b1f2777",
        color: "#eee",
        padding: "20px 10px"
      }}
      onClick={() => console.log("div", getComputedStyle(div).getPropertyValue("color"))}
    >
      <Settings />
      {/* {JSON.stringify(
        controlPanel !== undefined ? controlPanel.unit.style : controlPanel
      )} */}
    </div>
  );
}
