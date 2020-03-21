import React, { useContext, useState } from "react";
import PropTypes from 'prop-types';
import { ControlsContext } from "../ControlsContext";
import TypeInput from "../ModalWindows/Select";
import VisibleInput from "../../../Buttons/Visible/Visible";
import Types from "../../Class/Types";
import ColorInput from "../ColorPicker/ColorPicker";
import BlockSize from "../Size/SizeBlock";
import BlockAlign from "../Align/BlockAlign";
function SettingsPanel({ controlPanel, setControlPanel }) {
  const { btnColor, backgroundColor } = useContext(ControlsContext);
  const { unit, setUnit } = controlPanel;
  const { settings } = unit;

  console.log("/// SettingsPanel");
  console.log("unit", unit);
  console.log("settings", settings);
  const setSettings = settings => {
    setUnit({ ...unit, settings });
    setControlPanel({ ...controlPanel, unit: { ...unit, settings } });
  };

  const setType = type => {
    setUnit({ ...unit, type });
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
    setSettings({ ...settings, size });
    console.log("setSize", size);
  };
  const setImage = async e => {
    setSettings({ ...settings, image: e.target.files[0] });
    console.log("setImage", e.target.files[0]);
  };
  const [key, setkey] = useState(Math.random());
  const reload = () => {
    setkey(Math.random());
    console.log("key", key);
  };
  return (
    <div
      key={key}
      style={{
        display: "inline-flex",
        backgroundColor,
        margin: "2px",
        padding: "4px"
      }}
    >
      <TypeInput
        listItems={Types}
        defaultItem={unit.type}
        setItem={type => setType(type.value)}
      />

      <VisibleInput
        onClick={setVisible}
        color={settings.visible ? btnColor.on : btnColor.off}
      />
      <ColorInput color={settings.color} setColor={setColor} />
      <input type="file" onChange={setImage} />
      <BlockAlign
        setSettings={setSettings}
        settings={settings}
        btnColor={btnColor}
      />
      <BlockSize
        reload={reload}
        setSize={setSize}
        size={settings.size}
        btnColor={btnColor}
      />
    </div>
  );
}
SettingsPanel.propTypes = {
  controlPanel: PropTypes.shape({
    unit: PropTypes.shape({
      type: PropTypes.string,
      settings: {
        size: {
          height: PropTypes.string,
          width: PropTypes.string
        },
        index: PropTypes.number,
        color: PropTypes.array,
        visible: PropTypes.bool
      },
      value: PropTypes.object
    }),
    setUnit: PropTypes.func
  }),
};
export default SettingsPanel;
