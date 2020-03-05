import React from "react";
import BaseUnit from "../BaseUnit";
import Value from "./RowInput";
export default function Row(props) {
  const { style, dataUnit, setDataUnit,buttonColor } = props;

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
      <Value
        changeValue={changeValue}
        dataUnit={dataUnit}
        containerStyle={style.nameContStyle}
        buttonColor={buttonColor}
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
