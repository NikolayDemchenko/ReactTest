import React, { useState } from "react";
import RowInput from "./Row/RowInput";
import Settings from "./Settings";
import Types from "../Class/Types";
export default function BaseUnit({
  removeUnit,
  dataUnit,
  setDataUnit,
  updateUnit,
  buttonColor
}) {
  console.log("dataUnit.btnColor", dataUnit.btnColor);
   
  const update = updateUnit !== undefined ? updateUnit : setDataUnit;
  const nameVisibleClick = () => {
    update({ ...dataUnit, name:{...dataUnit.name,visible:!dataUnit.name.visible}});
    console.log("dataUnit.nameVisible", !dataUnit.nameVisible);
  };
  const visibleClick = () => {
    update({ ...dataUnit, visible: !dataUnit.visible });
    console.log("dataUnit.visible", !dataUnit.visible);
  };
  const typeClick = type => {
    update({ ...dataUnit, type: type });
    console.log("dataUnit.type", type);
  };
  const changeValue = nameValue => {
    update({ ...dataUnit, nameValue });
    console.log("changeValue", { ...dataUnit, nameValue });
  };
  const [key, resetKey] = useState(Math.random());
  console.log(' dataUnit.name.visible',  dataUnit.name.visible)
  return (
    <div key={key}    
     >
      <Settings
        types={Types}
        type={{ value: dataUnit.type, onClick: typeClick }}
        color={{ onClick: null }}
        visible={{ value: dataUnit.visible, onClick: visibleClick }}
        remove={() => {
          resetKey(Math.random());
          removeUnit(dataUnit);
        }}
       
        buttonColor={buttonColor}
      />
      <RowInput
        changeValue={changeValue}      
        buttonColor={buttonColor}
        visible={{
          value: dataUnit.name.visible,
          onClick: nameVisibleClick
        }}
        value={dataUnit.name.value}
        color={{ onClick: null }}
      />
    </div>
  );
}
