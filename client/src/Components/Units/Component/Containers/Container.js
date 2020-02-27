import React, { useState } from "react";
import { ButtonsContainer } from "../../../Buttons/ButtonsContainer";
import BaseUnit from "../BaseUnit";
import DataUnit from "../DataUnit";
export default function Container(props) {
  const { style, dataUnit, setDataUnit, getData } = props;
  const {
    contStyle,
    nameContStyle,
    nameBtnStyle,
    setsContStyle,
    setsBtnStyle
  } = style;
  const defaultUnit = {
    nameVisible: true,
    nameValue: null,
    type: "cont",
    bColor: "grey",
    color: "white",
    visible: true
  };

  const container = dataUnit.value !== undefined ? dataUnit.value : [];
  const addUnit = () => {
    setDataUnit({
      ...dataUnit,
      value: [...container, defaultUnit]
    });
  };
  getData(dataUnit);
  // console.log("dataUnit.value", dataUnit.value);

  const Data = () =>
    container.map(unit => (
      <DataUnit
        key={container.findIndex(i => i === unit)}
        getData={getData}
        unit={unit}
      />
    ));
  return (
    <div>
      <div>
        <BaseUnit {...props} />
        <ButtonsContainer
          containerStyle={setsContStyle}
          buttonStyle={setsBtnStyle}
          Plus={{
            onClick: addUnit
          }}
        />
      </div>
      <Data />
    </div>
  );
}
