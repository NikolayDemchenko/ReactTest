import React from "react";
import styles from "../../Unit.module.css";
import { ButtonsContainer } from "../../../Buttons/ButtonsContainer";
import BaseUnit from "../BaseUnit";
import DataUnit from "../DataUnit";
export default function Container(props) {
  const { defaultUnit, dataUnit, setDataUnit, remove } = props;

  const removeUnit = props.removeUnit !== undefined ? props.removeUnit : remove;
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

  const addUnit = () => {
    const index = container === [] ? 0 : container.length;
    const newUnit = {
      ...dataUnit,
      value: [...container, { ...defaultUnit, index }]
    };
    setDataUnit(newUnit);
  };
  // console.log('dataUnit', dataUnit)
  const Data = () =>
    container.map(unit => {
      console.log('container', container)
      return (
        <DataUnit
          defaultUnit={defaultUnit}
          parent={dataUnit}
          updateParent={setDataUnit}
          key={unit.index}
          unit={unit}
        />
      );
    });
  console.log("dataUnit.nameValue", dataUnit.nameValue);
  return (
    <div>
      <div className={setsContStyle}>
        <BaseUnit {...props} removeUnit={removeUnit} style={style} />
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
