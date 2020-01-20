import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import style from "../Styles/Template.module.css";
import control from "../../../../../Styles/ControlStyle.module.css";
import Elements from "./Element/Elements";
import AddBtn from "../../../../Buttons/PlusButton/TemplateItemPlus";
import Delete from "../../../../Buttons/DeleteButton/DeleteButton";
import { useMutation } from "@apollo/react-hooks";
import {
  NEW_ELEMENT,
  UPDATE_ELEMENT_NAME
} from "../../Template/TemplateQueries";
import CheckBtn from "../../../../Buttons/CheckButton/VisibleCheckBtn";
import { setAddGroup } from "../Function/SetAdd";
import { useApolloClient } from "@apollo/react-hooks";
export default ({setAddState, group, template, changeName }) => {
  const [newElement] = useMutation(NEW_ELEMENT, {
    variables: { template, group }
  });

  const [updateElementName] = useMutation(UPDATE_ELEMENT_NAME);
  const changeElementName = (name, element) => {
    element.name = name;
    updateElementName({ variables: { template, group, element } });
    setAddElement(false);
  };
  
  const [visibleCheckBtn, setVisibleCheckBtn] = useState(false);

  const [addElement, setAddElement] = useState(group.name!==""?true:false);
 

  const CheckBtnClick = input => {
    if (input.value !== "") {
      changeName(input.value);
      input.blur();
      setAddState(true);
      setAddElement(true);
      setVisibleCheckBtn(false);
    }
  };

  const keyPressEnter = (event, input) => {
    if (event.key == "Enter") {
      console.log("enter press here! ");
      CheckBtnClick(input);
    }
  };

  const inputChange = name => {
    changeName(name);
    setAddElement(false);
    name !== "" ? setVisibleCheckBtn(true) : setVisibleCheckBtn(false);
  };
  console.log("isVisibleCheckBtn", visibleCheckBtn);

  useEffect(() => {
    if (group.name == "") {
      input.focus();
    }
  });
  let input;
  return (
    <div className={style.Group}>
      Название группы :
      <div className={style.FlexRow}>
        <input
          ref={node => {
            input = node;
          }}
          onChange={() => {
            inputChange(input.value);
          }}
          onKeyPress={e => keyPressEnter(e, input)}
          className={control.Input}
          defaultValue={group.name}
        />
        <CheckBtn
          visible={visibleCheckBtn}
          onClick={() => {
            CheckBtnClick(input);
          }}
        />
        <Delete />
      </div>
      <AddBtn
        onClick={e => {
          e.preventDefault();
          newElement();
          setAddElement(false);
        }}
        isVisible={addElement}
      />
      <Elements
        elements={group.elements}
        changeName={changeElementName}
        checkBtnTrue={() => setAddElement(true)}
      />
    </div>
  );
};
