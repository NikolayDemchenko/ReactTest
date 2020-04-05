import React from "react";
import Icon from "react-icons-kit";
import { plus } from "react-icons-kit/icomoon/plus";
import Styles from "./Styles";
export default function StylePanel({ controlPanel, setControlPanel }) {
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
    const newName = "property";
    setStyle({ [newName]: "value", ...style });
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      newStyle();
    }
  };
  return (
    <div
      style={{
        borderTop: "6px solid #152535cc",
        background: "rgba(30,40,57,.8)",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: "1em" }}>
        JSS Стили
        <div
          style={{
            cursor: "pointer",
            color: "#9ab",
            width: "16px",
            margin: "0px 0px 5px 100px",
          }}
          onClick={newStyle}
        >
          <Icon size={"100%"} icon={plus} />
        </div>
      </div>
      <Styles style={style} setStyle={setStyle} />
    </div>
  );
}
