import React from "react";
import BaseUnit from "./BaseUnit";
import Name from "./Name";
export default function Row(props) {
  const { style, dataUnit, setDataUnit, updateUnit } = props;

  const valueVisibleClick = () => {
    setDataUnit({ ...dataUnit, valueVisible: !dataUnit.valueVisible });
    console.log("dataUnit.valueVisible", !dataUnit.valueVisible);
  };
  const changeValue = value => {
    updateUnit({ ...dataUnit, value });
    console.log("changeName", { ...dataUnit, value });
  };
  const updateValue = value => {
    setDataUnit({ ...dataUnit, value });
    console.log("dataUnit.value", value);
  };
  return (
    <div>
      <div>
        <BaseUnit {...props} />
        <Name
          changeValue={changeValue}
          dataUnit={dataUnit}
          containerStyle={style.nameContStyle}
          buttonStyle={style.nameBtnStyle}
          visible={{
            value:
              dataUnit.valueVisible !== undefined
                ? dataUnit.valueVisible
                : true,
            onClick: valueVisibleClick
          }}
          name={{ value: dataUnit.value, update: updateValue }}
          color={{ onClick: null }}
        />
      </div>
    </div>
  );
}
