import React from "react";
import BaseUnit from "../BaseUnit";
import DocInput from "./DocInput";
export default function Doc(props) {
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
    <div >
      <BaseUnit {...props} />
      <DocInput
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
