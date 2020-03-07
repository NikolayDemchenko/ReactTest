import React, { useState } from "react";
import "./App.css";
import PanelUnit from "./Components/Units/Component/Unit";
import ViewUnit from "./Components/Units/Component/ViewUnit";

const baseElement = {
  index: 0,
  name: { visible: true, value: null },
  type: "unit",
  bColor: "grey",
  color: "white",
  visible: true
};
const NewApp = () => {
 
  const [unit, setUnit] = useState(baseElement);
  const [panel, setPanel] = useState(baseElement);
  return (
    <div>
      <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
        <PanelUnit unit={panel} />
        <ViewUnit unit={unit} />
      </div>
    </div>
  );
};
export default NewApp;
