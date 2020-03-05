import React from "react";
import styles from "../../Unit.module.css";
import { ButtonsContainer } from "../../../Buttons/ButtonsContainer";
import BaseUnit from "../BaseUnit";
import Value from "./ContainerInput";
export default function Container(props) {
  const {reset, defaultUnit, dataUnit, setDataUnit, removeUnit, on, active } = props;

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
  console.log("dataUnit.nameValue", dataUnit.nameValue);
  return (
    <div>
      <div className={setsContStyle}>
        <BaseUnit {...props} removeUnit={remove} style={style}  buttonColor={{ on, active}} />
        <ButtonsContainer
          containerStyle={setsContStyle}        
          Plus={{
            onClick: addChild,
            color: [235, 115, 210] 
          }}
        />
      </div>
      <Value {...props} units={container} style={style}/>
    </div>
  );
}
