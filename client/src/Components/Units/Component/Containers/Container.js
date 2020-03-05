import React from "react";
import styles from "../../Unit.module.css";
import { ButtonsContainer } from "../../../Buttons/ButtonsContainer";
import BaseUnit from "../BaseUnit";
import Value from "./ContainerInput";
export default function Container(props) {
  const {reset, defaultUnit, dataUnit, setDataUnit, removeUnit, buttonColor} = props;
console.log('buttonColor', buttonColor)
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

  return (
    <div>
      <div className={setsContStyle}>
        <BaseUnit {...props} removeUnit={remove} style={style} />
        <ButtonsContainer
          containerStyle={setsContStyle}        
          Plus={{
            onClick: addChild,
            color:dataUnit.btnColor? dataUnit.btnColor.active: buttonColor.active 
          }}
        />
      </div>
      <Value {...props} buttonColor={dataUnit.btnColor? dataUnit.btnColor: buttonColor} units={container} style={style}/>
    </div>
  );
}
