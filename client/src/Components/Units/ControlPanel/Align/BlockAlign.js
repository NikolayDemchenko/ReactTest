import React from "react";
import { alignLeft } from "react-icons-kit/fa/alignLeft";
import { alignCenter } from "react-icons-kit/fa/alignCenter";
import { alignRight } from "react-icons-kit/fa/alignRight";
import Button from "../../../Buttons/Button";
export default ({ setSettings, settings, btnColor }) => {
   
    const setAlign = align => {
        setSettings({ ...settings, align });
        console.log("setAlign", align);
      };
    const setCenter = () => {
        delete settings.align
        setSettings({ ...settings});
        console.log("setCenter",settings);
      };
  const getColor = value => {
    return settings.align === value ? btnColor.on : btnColor.active;
  };
  return (
    <div style={{ display: "inline-flex" }}>
      <Button
        onClick={() => setAlign(true)}
        color={getColor(true)}
        icon={alignLeft}
      />
      <Button
        onClick={() => setCenter()}
        color={getColor(undefined)}
        icon={alignCenter}
      />
      <Button
        onClick={() => setAlign(false)}
        color={getColor(false)}
        icon={alignRight}
      /> 
    </div>
  );
};
