import React from "react";
import BaseUnit from "./BaseUnit";
import Name from "./Name";
export default function Row(props) {
  const { style, dataUnit, setDataUnit } = props;
  const valueVisibleClick = () => {
    setDataUnit({ ...dataUnit, valueVisible: !dataUnit.valueVisible });
    console.log("dataUnit.valueVisible", !dataUnit.valueVisible);
  };
  const nameUpdate = value => {
    setDataUnit({ ...dataUnit, value });
    console.log("dataUnit.value", value);
  };
  return (
    <div>
      <div>
        <BaseUnit {...props} />
        <Name
          containerStyle={style.nameContStyle}
          buttonStyle={style.nameBtnStyle}
          visible={{
            value: dataUnit.valueVisible!==undefined?dataUnit.valueVisible:true,
            onClick: valueVisibleClick
          }}
          name={{ value: dataUnit.nameValue, update: nameUpdate }}
          color={{ onClick: null }}
        />
      </div>
    </div>
  );
}
