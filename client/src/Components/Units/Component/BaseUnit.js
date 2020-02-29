import React from "react";
import Name from "./Name";
import Settings from "./Settings";
import Types from "../Class/Types";
export default function Unit({
  removeUnit,
  style,
  dataUnit,
  setDataUnit,
  updateUnit
}) {
  // console.log('dataUnit', dataUnit)
  const nameVisibleClick = () => {
    updateUnit({ ...dataUnit, nameVisible: !dataUnit.nameVisible });
    console.log("dataUnit.nameVisible", !dataUnit.nameVisible);
  };
  const nameUpdate = nameValue => {
    setDataUnit({ ...dataUnit, nameValue });
    console.log("dataUnit.name", { ...dataUnit, nameValue });
  };
  const visibleClick = () => {
    updateUnit({ ...dataUnit, visible: !dataUnit.visible });
    console.log("dataUnit.visible", !dataUnit.visible);
  };
  const typeClick = type => {
    updateUnit({ ...dataUnit, type: type });
    console.log("dataUnit.type", type);
  };
  const changeValue = nameValue => {
    updateUnit({ ...dataUnit, nameValue });
    console.log("changeName", { ...dataUnit, nameValue });
  };
  return (
    <div className={style.contStyle}>
      <Settings
        types={Types}
        type={{ value: dataUnit.type, onClick: typeClick }}
        color={{ onClick: null }}
        visible={{ value: dataUnit.visible, onClick: visibleClick }}
        remove={() => removeUnit(dataUnit)}
        containerStyle={style.setsContStyle}
        buttonStyle={style.setsBtnStyle}
      />
      <Name
        changeValue={changeValue}
        dataUnit={dataUnit}
        containerStyle={style.nameContStyle}
        buttonStyle={style.nameBtnStyle}
        visible={{
          value: dataUnit.nameVisible,
          onClick: nameVisibleClick
        }}
        name={{ value: dataUnit.nameValue, update: nameUpdate }}
        color={{ onClick: null }}
      />
    </div>
  );
}
