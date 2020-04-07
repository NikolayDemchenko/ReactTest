import React from "react";
import Icon from "react-icons-kit";
import { plus } from "react-icons-kit/icomoon/plus";
import Styles from "./Properties";
import StylePanel from "./StylePanel";
export default function MainPanel({ controlPanel, setControlPanel }) {
  const { style } = controlPanel.unit.tagProps;

  const { unit, setUnit } = controlPanel;
  const setStyle = (style) => {
    setUnit({ ...unit, tagProps: { ...unit.tagProps, style } });
    setControlPanel({
      ...controlPanel,
      unit: { ...unit, tagProps: { ...unit.tagProps, style } },
    });
  };

  return (
    <div style={{ background: "rgba(30,40,57,.8)" }}>
      <div style={{ paddingLeft: "1em" }}>JSS Стили</div>
      <StylePanel name={"Base style"} style={style} setStyle={setStyle} />
    </div>
  );
}
