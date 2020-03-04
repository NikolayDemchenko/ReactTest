import React from "react";
import BaseUnit from "./BaseUnit";
import Name from "./Name";
export default function Row(props) {
  const { style, dataUnit, setDataUnit } = props;

  const valueVisibleClick = () => {
    setDataUnit({ ...dataUnit, valueVisible: !dataUnit.valueVisible });
    console.log("dataUnit.valueVisible", !dataUnit.valueVisible);
  };
  const changeValue = value => {
    setDataUnit({ ...dataUnit, value });
    console.log("changeName", { ...dataUnit, value });
  };
  // const updateValue = value => {
  //   setDataUnit({ ...dataUnit, value });
  //   console.log("dataUnit.value", value);
  // };
  return (
    <div>
      <BaseUnit {...props} />
      <Name
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
