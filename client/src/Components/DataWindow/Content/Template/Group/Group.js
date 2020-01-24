import React, { useState, useEffect } from "react";
import style from "../Styles/Template.module.css";
import control from "../../../../../Styles/ControlStyle.module.css";
import Elements from "./Element/Elements";
import AddBtn from "../../../../Buttons/Plus/TemplateItemPlus";
import Delete from "../../../../Buttons/Delete/Delete";
import { useMutation,
  //  useApolloClient 
  } from "@apollo/react-hooks";
import {
  DELETE_ELEMENT,
  NEW_ELEMENT,
  UPDATE_ELEMENT_NAME
} from "../../Template/Group/Element/Queries";
import CheckBtn from "../../../../Buttons/CheckButton/VisibleCheckBtn";

export default ({
  remove,
  add,
  setAdd,
  group,
  template,
  changeName,
  save,
  refetch
}) => {
  const { id } = group;
  const parentId = template.id;
  const [newElement] = useMutation(NEW_ELEMENT, {
    variables: { template, group }
  });
  const [deleteElement] = useMutation(DELETE_ELEMENT);
  const removeElement = element => {
    deleteElement({ variables: { template, group, element } });
    setAdd(true);
    // console.log("Тута!!!!!:",template);
  };
  const [updateElementName] = useMutation(UPDATE_ELEMENT_NAME);
  const changeElementName = (name, element) => {
    element.name = name;
    updateElementName({ variables: { template, group, element } });
    setAdd(false);
  };

  const [visibleCheckBtn, setVisibleCheckBtn] = useState(false);

  const CheckBtnClick = input => {
    if (input.value !== "") {
      save({ id, parentId, name: input.value });
      input.blur();
      setAdd(true);
      setVisibleCheckBtn(false);
      console.log("Сейвится группа");
    }
  };

  const keyPressEnter = (event, input) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
      CheckBtnClick(input);
    }
  };

  const inputChange = name => {
    changeName(name);
    setAdd(false);
    name !== "" ? setVisibleCheckBtn(true) : setVisibleCheckBtn(false);
  };
  // console.log("isVisibleCheckBtn", visibleCheckBtn);

  useEffect(() => {
    if (group.name === "") {
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
        <Delete
          onClick={() => {
            console.log("Удаление");
            remove({ id });
          }}
        />
      </div>
      <AddBtn
        onClick={e => {
          e.preventDefault();
          newElement();
          setAdd(false);
        }}
        isVisible={add}
      />
      <Elements
        setAdd={setAdd}
        refetch={refetch}
        remove={removeElement}
        elements={group.elements}
        changeName={changeElementName}
        checkBtnTrue={() => setAdd(true)}
      />
    </div>
  );
};
