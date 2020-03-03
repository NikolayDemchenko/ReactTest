import React from "react";
import styles from "../../Unit.module.css";
import { ButtonsContainer } from "../../../Buttons/ButtonsContainer";
import BaseUnit from "../BaseUnit";
import DataUnit from "../DataUnit";
import SwitchUnit from "../SwitchUnit";
export default function Container(props) {
  const { defaultUnit, dataUnit, setDataUnit, removeUnit } = props;

  // const remove = props.removeUnit !== undefined ? props.removeUnit : removeUnit;
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
  const updateUnit = newUnit => {
    console.log("newUnit", newUnit);
    // // setDataUnit(newUnit);
    // if (parent !== undefined) {
    //   const value = parent.value.map(unit =>
    //     unit.index === newUnit.index ? { ...newUnit } : unit
    //   );
    //   updateParent({ ...parent, value });
    // }
  };
  // console.log('dataUnit', dataUnit)
  const Data = () =>
    container.map(unit => {
      console.log('container', container)
      return (
        <SwitchUnit
        defaultUnit={defaultUnit}
        removeUnit={removeUnit}
        updateUnit={updateUnit}
        // parent={parent}
        dataUnit={unit}
        setDataUnit={setDataUnit}
        style={{
          contStyle: style.RowContainer,
          nameContStyle: style.RowContainer,
          nameBtnStyle: style,
          setsContStyle: style.RowContainer,
          setsBtnStyle: style
        }}
      />
        // <DataUnit    
        //   defaultUnit={defaultUnit}
        //   parent={dataUnit}
        //   updateParent={setDataUnit}
        //   key={unit.index}
        //   unit={unit}
        // />
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
