import React from "react";
import ButtonsContainer from '../Buttons/ButtonsContainer'
export default function Unit({ 
  unitStyle,
  VisibleClick,
  visible,
  CheckClick,
  DeleteClick,
  Data
}) {
  const unitName="Юнит"

  let input;
  return (
    <div className={unitStyle.Unit}>
      <input
        placeholder="Введите наименование"
        ref={node => {
          input = node;
        }}
        onKeyPress={e => keyPressEnter(e, input)}
        onChange={() => changeUnit(input.value)}
        className={unitStyle.Input}
        defaultValue={unitName}
      />
      <ButtonsContainer
        containerStyle={unitStyle.BtnContainer}
        stateStyle={StateStyle}
        Check={{
          onClick: CheckClick,
          state: "active"
        }}
        Visible={{
          onClick: VisibleClick,
          state: visible
        }}
        Delete={{ onClick: DeleteClick, state: "active" }}
      />
      <Data />
    </div>
  );
}
