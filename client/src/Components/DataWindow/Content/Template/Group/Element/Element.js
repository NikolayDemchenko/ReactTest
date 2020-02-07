import React, { useEffect, useState } from "react";
import control from "../../../../../../Styles/ControlStyle.module.css";
import { useMutation } from "@apollo/react-hooks";
import style from "./Styles/Element.module.css";
import {
  CrudButton,
  ButtonsContainer
} from "../../../../../Buttons/ButtonsContainer";
import { UPDATE_ELEMENT_FIELDS } from "./Queries";
export default ({ data, checkBtnTrue, remove, save, setAdd }) => {
  const { template, group, element } = data;
  const { id, name, parentId, visible, filter } = element;

  const [checkState, setCheck] = useState("inactive");

  const [updateElement] = useMutation(UPDATE_ELEMENT_FIELDS);
  const changeName = name => {
    element.name = name;
    updateElement({ variables: { template, group, element } });
    setAdd(false);
  };

  const VisibleClick = () => {
    element.visible = !element.visible;
    element.filter = false;
    updateElement({ variables: { template, group, element } });
    setAdd(false);
    setCheck("active");
  };
  const FilterClick = () => {
    if (element.visible === false) element.visible = true;
    element.filter = !element.filter;
    updateElement({ variables: { template, group, element } });
    setAdd(false);
    setCheck("active");
  };

  const checkBtnClick = input => {
    if (input.value !== "") {
      changeName(input.value);
      save({ id, parentId, name: input.value, visible, filter });
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
    if(group.visible===false){
      element.visible = false;
      element.filter = false;     
    } 
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
      <ButtonsContainer
        containerStyle={CrudButton.Container}
        buttonStyle={CrudButton}
        Visible={{
          onClick: VisibleClick,
          state: group.visible===true?element.visible === true ? "on" : "active":null
        }}
        Filter={{
          onClick: FilterClick,
          state: group.visible===true?element.filter === true ? "on" : "active":null
        }}      
        Save={{ onClick: () => checkBtnClick(input), state: checkState }}
        Delete={{ onClick: remove, state: "active" }}
      />
    </div>
  );
};
