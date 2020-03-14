import React, { useState } from "react";
import { ButtonsContainer } from "../../../Buttons/ButtonsContainer";
import BaseUnit from "../BaseUnit";
import Value from "./ContainerInput";
import StringInput from "../../ControlPanel/StringInput";
export default function Container(props) {
  const {
    reset,
    defaultUnit,
    dataUnit,
    setDataUnit,
    removeUnit,
    buttonColor
  } = props;

  console.log("buttonColor", buttonColor);
  const remove = removeUnit !== undefined ? removeUnit : reset;

  const container =
    dataUnit !== undefined &&
    dataUnit.value !== undefined &&
    dataUnit.value instanceof Array
      ? dataUnit.value
      : [];

  const getNameValue = value => {
    setDataUnit({ ...dataUnit, name: { ...dataUnit.name, value } });
    console.log("changeValue", value);
  };
  const addChild = () => {
    const index = container === [] ? 0 : container.length;
    const unit = {
      ...dataUnit,
      value: [...container, { ...defaultUnit, index }]
    };
    setDataUnit(unit);
  };

  const _on = 255;
  const _off = 80;
  const _active = 40;
  const btnColor = {
    on: [_on, 40, 250],
    active: [_active, 80, _active],
    off: [_off, _off, _off]
  };
  const ContainerPanel = props => {
    return (
      <div
        style={{
          display: "inline-flex",
          height: "110px",
          position: "fixed",
          // color: "aliceblue",
          // textAlign: "center",
          // lineHeight: "10px",
          backgroundColor: "#8e8e8e",
          border: "2px solid greenyellow",
          top: "0"
          // left: "0",
          // right: "0",
          // zIndex: "101"
        }}
      >
        <BaseUnit {...props} buttonColor={btnColor} removeUnit={remove} />
        <ButtonsContainer
          Plus={{
            onClick: addChild,
            color: btnColor ? btnColor.active : buttonColor.active
          }}
        />
      </div>
    );
  };
  const [select, setSelect] = useState(false);

  const menu = select ? <ContainerPanel {...props} /> : <div />;

  return (
    <div>
      {menu}
      {/* <div
        style={{
          marginTop: "110px",
          border: "2px solid yellow"
        }}
        onClick={() => {
          setSelect(true);
          console.log("Клик!!!!");
        }}
        onBlur={() => {
          setSelect(false);
          console.log("!!!!!!!!!!onBlur");
        }}
      >
        <StringInput value={dataUnit.name.value} getValue={getNameValue} />
        <Value {...props} buttonColor={btnColor} units={container} />
      </div> */}
    </div>
  );
}
