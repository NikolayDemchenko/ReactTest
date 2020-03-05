import React, { useState } from "react";
import RowInput from "./Row/RowInput";
import Settings from "./Settings";
import Types from "../Class/Types";
export default function BaseUnit({
  removeUnit,
  style,
  dataUnit,
  setDataUnit,
  updateUnit
}) {
  const update = updateUnit !== undefined ? updateUnit : setDataUnit;
  const nameVisibleClick = () => {
    update({ ...dataUnit, nameVisible: !dataUnit.nameVisible });
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
  return (
    <div key={key} className={style.contStyle}>
      <Settings
        types={Types}
        type={{ value: dataUnit.type, onClick: typeClick }}
        color={{ onClick: null }}
        visible={{ value: dataUnit.visible, onClick: visibleClick }}
        remove={() => {
          resetKey(Math.random())
          removeUnit(dataUnit);
        }}
        containerStyle={style.setsContStyle}
        buttonStyle={style.setsBtnStyle}
      />
      <RowInput
        changeValue={changeValue}
        dataUnit={dataUnit}
        containerStyle={style.nameContStyle}
        buttonStyle={style.nameBtnStyle}
        visible={{
          value: dataUnit.nameVisible,
          onClick: nameVisibleClick
        }}
        value={dataUnit.nameValue}
        color={{ onClick: null }}
      />
    </div>
  );
}
