import React from "react";
import { alignLeft } from "react-icons-kit/fa/alignLeft";
import { alignCenter } from "react-icons-kit/fa/alignCenter";
import { alignRight } from "react-icons-kit/fa/alignRight";
import { alignJustify } from "react-icons-kit/fa/alignJustify";
import Button from "../../../Buttons/Button";
export default ({ setAlign, align, btnColor }) => {
  const getColor = value => {
    return align === value ? btnColor.on : btnColor.active;
  };
  return (
    <div style={{ display: "inline-flex" }}>
      <Button
        onClick={() => setAlign("left")}
        color={getColor("left")}
        icon={alignLeft}
      />
      <Button
        onClick={() => setAlign("center")}
        color={getColor("center")}
        icon={alignCenter}
      />
      <Button
        onClick={() => setAlign("right")}
        color={getColor("right")}
        icon={alignRight}
      />
      <Button
        onClick={() => setAlign("justify")}
        color={getColor("justify")}
        icon={alignJustify}
      />
    </div>
  );
};
