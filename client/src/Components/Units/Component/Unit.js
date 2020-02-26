import React, { useState } from "react";
import style from "../Unit.module.css";
import Name from "./Name";
import Settings from "./Settings";
import Container from "./Containers/Container";
export default function Unit({ unit }) {
  const defaultUnit = {
    nameVisible: true,
    nameValue: null,
    type: "cont",
    bColor: "grey",
    color: "white",
    visible: true
  };
  const [thisUnit, setThisUnit] = useState(
    unit === !undefined ? unit : defaultUnit
  );
  const nameVisibleClick = () => {
    setThisUnit({ ...thisUnit, nameVisible: !thisUnit.nameVisible });
    console.log("thisUnit.nameVisible", !thisUnit.nameVisible);
  };
  const nameUpdate = name => {
    setThisUnit({ ...thisUnit, name });
    console.log("thisUnit.name", name);
  };
  const visibleClick = () => {
    setThisUnit({ ...thisUnit, visible: !thisUnit.visible });
    console.log("thisUnit.visible", !thisUnit.visible);
  };
  const typeClick = type => {
    setThisUnit({ ...thisUnit, type:type });
    console.log("thisUnit.type", type);
  };
  const addUnit = () => { 
    const oldValue= thisUnit.value!==undefined?thisUnit.value:[]
    setThisUnit({ ...thisUnit, value: [ ...oldValue,<Unit key={Date.now()} unit={defaultUnit} />] });
  }; 
  console.log("thisUnit",thisUnit);

  return (
    <div>
      <div className={style.RowContainer}>
        <Name
          containerStyle={style.RowContainer}
          buttonStyle={style}
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

          add={addUnit}

          containerStyle={style.RowContainer}
          buttonStyle={style}
        />
      </div>{thisUnit.value}     
    </div>
  );
}
