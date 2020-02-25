import React, { useState } from "react";
import style from "../Unit.module.css";
import Name from "./Name";
import Settings from "./Settings";
import Container from "./Containers/Container";
export default function Unit({ unit }) {
  const defaultUnit = {
    nameVisible: true,
    nameValue: null,
    type: "container",
    bColor: "grey",
    color: "white",
    visible: true,
    value: null
  };
  const [thisUnit, setThisUnit] = useState(
    unit === !undefined ? unit : defaultUnit
  );
  const nameVisibleClick = () => {
    setThisUnit({ ...thisUnit, nameVisible: !thisUnit.nameVisible });
    console.log("thisUnit.nameVisible", !thisUnit.nameVisible);
  };
  const nameUpdate = (value) => {
    setThisUnit({ ...thisUnit, name: value });
    console.log("thisUnit.name", value);
  };
  const visibleClick = () => {
    setThisUnit({ ...thisUnit, visible: !thisUnit.visible });
    console.log("thisUnit.visible", !thisUnit.visible);
  };
  const typeClick = (value) => {
    setThisUnit({ ...thisUnit, type: value });
    console.log("thisUnit.type", value);
  };

  // const name = { value: unit.name, update: () => null };

  if (unit === undefined) {
    unit = defaultUnit;
  }

  return (
    <div>
      <div>
        <Name
          style={style}
          visible={{ value: thisUnit.nameVisible, onClick: nameVisibleClick }}
          name={{ value: thisUnit.nameValue, update: nameUpdate }}
          color={{ onClick: null }}
        />
        <Settings
          type={{ value: thisUnit.type, onClick: typeClick }}
          color={{ onClick: null }}
          visible={{ value: thisUnit.visible, onClick: visibleClick }}
          remove={{ onClick: null }}
          check={{ onClick: null }}
          style={style}
        />
      </div>
      <Container />
    </div>
  );
}
