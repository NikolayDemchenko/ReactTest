import React from "react";
import Settings from "../SettingsPanel/SettingsPanel";
export default function BasePanel({ controlPanel, setControlPanel }) {
  const { style } = controlPanel !== undefined ? controlPanel.unit : false;

  const Settings = () => {
    if (style) {
      const settings = [];
      for (var key in style) {
        settings.push(<div>{key} {style[key]}</div>);   
      }
      return settings;
    } else {
      return <div />;
    }
  };

  return (
    <div
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
    >
      <Settings />
      {/* {JSON.stringify(
        controlPanel !== undefined ? controlPanel.unit.style : controlPanel
      )} */}
    </div>
  );
}
