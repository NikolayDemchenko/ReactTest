import React from "react";
import Name from "./Name";
import Settings from "./Settings";
import Types from "../Class/Types";
export default function Unit({ style,dataUnit,setDataUnit }) {

  const nameVisibleClick = () => {
    setDataUnit({ ...dataUnit, nameVisible: !dataUnit.nameVisible });
    console.log("dataUnit.nameVisible", !dataUnit.nameVisible);
  };
  const nameUpdate = name => {
    setDataUnit({ ...dataUnit, name });
    console.log("dataUnit.name", name);
  };
  const visibleClick = () => {
    setDataUnit({ ...dataUnit, visible: !dataUnit.visible });
    console.log("dataUnit.visible", !dataUnit.visible);
  };
  const typeClick = type => {
    setDataUnit({ ...dataUnit, type: type });
    console.log("dataUnit.type", type);
  };
    return (
    <div className={style.contStyle}>
      <Name
        containerStyle={style.nameContStyle}
        buttonStyle={style.nameBtnStyle}
        visible={{
          value: dataUnit.nameVisible,
          onClick: nameVisibleClick
        }}
        name={{ value: dataUnit.nameValue, update: nameUpdate }}
        color={{ onClick: null }}
      />
      <Settings
        types={Types}
        type={{ value: dataUnit.type, onClick: typeClick }}
        color={{ onClick: null }}
        visible={{ value: dataUnit.visible, onClick: visibleClick }}
        remove={{ onClick: null }}
        check={{ onClick: null }}
        containerStyle={style.setsContStyle}
        buttonStyle={style.setsBtnStyle}
      />
    </div>
  );
}
