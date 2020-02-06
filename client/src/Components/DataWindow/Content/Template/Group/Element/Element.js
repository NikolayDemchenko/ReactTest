import React, { useEffect, useState } from "react";
import control from "../../../../../../Styles/ControlStyle.module.css";
import buttonStyle from "./Styles/Button.module.css";
import style from "./Styles/Element.module.css";
import BtnContainer from "../../../../../Buttons/ButtonsContainer";
export default ({ checkBtnTrue, remove, element, changeName, save }) => {
  const { id, name, parentId } = element;
  const [checkState, setCheck] = useState("inactive");

  const checkBtnClick = input => {
    if (input.value !== "") {
      changeName(input.value);
      save({ id, parentId, name: input.value });
      input.blur();
      checkBtnTrue();
      setCheck("inactive");
    }
  };
  const keyPressEnter = (event, input) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
      checkBtnClick(input);
    }
  };

  const inputChange = name => {
    changeName(name);
    name !== "" ? setCheck("active") : setCheck("inactive");
  };
  useEffect(() => {
    if (name === "") {
      input.focus();
    }
  });
  let input;
  return (
    <div className={style.Element}>
      Элемент:
      <input
        placeholder="Введите наименование"
        ref={node => {
          input = node;
        }}
        onKeyPress={e => keyPressEnter(e, input)}
        onChange={() => inputChange(input.value)}
        className={control.Input}
        defaultValue={name}
      />
      <BtnContainer
        containerStyle={buttonStyle.Container}
        buttonStyle={buttonStyle}
        Save={{ onClick: () => checkBtnClick(input), state: checkState }}
        Delete={{ onClick: remove, state: "active" }}
      />
    </div>
  );
};
