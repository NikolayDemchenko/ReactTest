import React, { useContext } from "react";
import { ControlsContext } from "./ControlsContext";
import TypeInput from "./Select";
import VisibleInput from "../../Buttons/Visible/Visible";
import Types from "../Class/Types";
import ColorInput from "./ColorInput";
import BlockSize from "./Size/BlockSize";
import BlockAlign from './Align/BlockAlign'
export default function SettingsPanel({ settings, setSettings }) {
  const { btnColor, backgroundColor } = useContext(ControlsContext);
  const setType = type => {
    setSettings({ ...settings, type });
    console.log("setType", type);
  };
  const setVisible = () => {
    setSettings({ ...settings, visible: !settings.visible });
    console.log("setVisible", !settings.visible);
  };
  const setColor = color => {
    setSettings({ ...settings, color });
    console.log("setColor", color);
  };
  const setSize = size => {
    setSettings({ ...settings, size});
    console.log("setSize", size);
  };

  return (
    <div
      style={{
        display: "inline-flex",
        backgroundColor,
        margin: "2px",
        padding: "4px"
      }}
    >
      <TypeInput
        listItems={Types}
        defaultItem={settings.type}
        setItem={type => setType(type.value)}
      />

      <VisibleInput
        onClick={setVisible}
        color={settings.visible ? btnColor.on : btnColor.off}
      />
      <ColorInput color={settings.color} setColor={setColor} />
      <BlockAlign
        setSettings={setSettings}
        settings={settings}
        btnColor={btnColor}
      />
      <BlockSize
        setSize={setSize}
        size={settings.size}
        btnColor={btnColor}
      />
    </div>
  );
}
