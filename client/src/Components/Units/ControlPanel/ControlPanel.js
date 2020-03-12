import React, { useContext } from "react";
import { ControlsContext } from "./ControlsContext";
import TypeInput from "./Select";
import VisibleInput from "../../Buttons/Visible/Visible";
import Types from "../Class/Types";
import Text from "./TextInput";
import ColorInput from "./ColorInput";
import SettingsInput from "./SettingsPanel";
export default function UnitInput({
  textPanel,
  setTextPanel,
  settingsPanel,
  setSettingsPanel
}) {
  const setText = name => {
    textPanel.setText(name);
    setTextPanel({ ...textPanel, text: name });
    console.log("setText", name);
  };
  const setSettings = settings => {
    settingsPanel.setSettings(settings);
    setSettingsPanel({ ...settingsPanel, settings: settings });
    console.log("setSettings", settings);
  };
  return (
    <div style={{ display: "inline-flex" }}>
      {settingsPanel ? (
        <SettingsInput settings={settingsPanel.settings}
         setSettings={setSettings}
         />
      ) : null}
      {textPanel ? (
        <Text label={"Текст :"} text={textPanel.text} setText={setText} />
      ) : null}
     </div>
  );
}
