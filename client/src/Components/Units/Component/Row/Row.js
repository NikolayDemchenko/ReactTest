import React from "react";
import BaseUnit from "../BaseUnit";
import RowInput from "./RowInput";
export default function Row(props) {
  const { style, dataUnit, setDataUnit } = props;

  const valueVisibleClick = () => {
    setDataUnit({ ...dataUnit, valueVisible: !dataUnit.valueVisible });
    console.log("dataUnit.valueVisible", !dataUnit.valueVisible);
  };
  const changeValue = value => {
    setDataUnit({ ...dataUnit, value });
    console.log("changeValue", { ...dataUnit, value });
  };

  return (
    <div>
      <BaseUnit {...props} />
      <RowInput
        changeValue={changeValue}
        dataUnit={dataUnit}
        containerStyle={style.nameContStyle}
        buttonStyle={style.nameBtnStyle}
        visible={{
          value:
            dataUnit.valueVisible !== undefined ? dataUnit.valueVisible : true,
          onClick: valueVisibleClick
        }}
        value={dataUnit.value}
        color={{ onClick: null }}
      />
    </div>
  );
}
