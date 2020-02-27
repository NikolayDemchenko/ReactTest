import React, { useEffect } from "react";
import { ButtonsContainer } from "../../../Buttons/ButtonsContainer";
import BaseUnit from "../BaseUnit";
import Unit from "../Unit";
export default function Container(props) {
  const { style, dataUnit, setDataUnit } = props;
  const defaultUnit = {
    nameVisible: true,
    nameValue: null,
    type: "cont",
    bColor: "grey",
    color: "white",
    visible: true
  };
  const addUnit = () => {
    const oldValue = dataUnit.value !== undefined ? dataUnit.value : [];
    setDataUnit({
      ...dataUnit,
      value: [...oldValue, defaultUnit]
    });
  };
  const unitValue = dataUnit.value !== undefined ? dataUnit.value : [];
  const Data = () =>
    unitValue.map(unit => (
      <Unit key={unitValue.findIndex(i => i == unit)} unit={unit} />
    ));
  return (
    <div>
      <div>
        <BaseUnit {...props} />
        <ButtonsContainer
          containerStyle={style.setsContStyle}
          buttonStyle={style.setsBtnStyle}
          Plus={{
            onClick: addUnit
          }}
        />
      </div>
      <Data />
    </div>
  );
}
