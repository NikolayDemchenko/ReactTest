import React from "react";
import styles from "../../Unit.module.css";
import { ButtonsContainer } from "../../../Buttons/ButtonsContainer";
import BaseUnit from "../BaseUnit";
import SwitchUnit from "../SwitchUnit";
export default function Container(props) {
  const {reset, defaultUnit, dataUnit, setDataUnit, removeUnit } = props;

  const remove = removeUnit !== undefined ? removeUnit : reset;
  const style =
    props.style !== undefined
      ? props.style
      : {
          contStyle: styles.RowContainer,
          nameContStyle: styles.RowContainer,
          nameBtnStyle: styles,
          setsContStyle: styles.RowContainer,
          setsBtnStyle: styles
        };
  // console.log('style', style)
  const { setsContStyle, setsBtnStyle } = style;

  const container =
    dataUnit !== undefined &&
    dataUnit.value !== undefined &&
    dataUnit.value instanceof Array
      ? dataUnit.value
      : [];

  const addChild = () => {
    const index = container === [] ? 0 : container.length;
    const unit = {
      ...dataUnit,
      value: [...container, { ...defaultUnit, index }]
    };
    setDataUnit(unit);
  };
  const setChild = child => {
    console.log("setChild", child);
    const value = container.map(unit =>
      unit.index === child.index ? { ...child } : unit
    );
    setDataUnit({ ...dataUnit, value });
  };
  const removeChild = child => {
    console.log("removeChild", child);
    const value = container.filter(unit => unit.index !== child.index);
    setDataUnit({ ...dataUnit, value });
  };
  // console.log('dataUnit', dataUnit)
  const Data = () =>
    container.map(unit => {
      console.log("container", container);
      return (
        <SwitchUnit
          key={unit.index}
          defaultUnit={defaultUnit}
          removeUnit={removeChild}
          dataUnit={unit}
          setDataUnit={setChild}
          style={style}
        />
      );
    });
  console.log("dataUnit.nameValue", dataUnit.nameValue);
  return (
    <div>
      <div className={setsContStyle}>
        <BaseUnit {...props} removeUnit={remove} style={style} />
        <ButtonsContainer
          containerStyle={setsContStyle}
          buttonStyle={setsBtnStyle}
          Plus={{
            onClick: addChild
          }}
        />
      </div>
      <Data />
    </div>
  );
}
