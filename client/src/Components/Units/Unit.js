import React from "react";

export default function Unit({
  unitName,
  unitStyle,
  VisibleClick,
  visible,
  CheckClick,
  DeleteClick,
  Data
}) {
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
        buttonStyle={unitStyle}
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
