import React, { useState, useEffect } from "react";
import style from "../Styles/Template.module.css";
import control from "../../../../../Styles/ControlStyle.module.css";
import Elements from "./Element/Elements";
import { Plus, Delete, Check } from "../../../../Buttons/AllButtons";
import { List } from "../../../../hoc/AllHocs";
import {
  useMutation
  //  useApolloClient
} from "@apollo/react-hooks";
import {
  DELETE_ELEMENT,
  NEW_ELEMENT,
  UPDATE_ELEMENT_NAME
} from "../../Template/Group/Element/Queries";
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

  const [checkState, setCheck] = useState(false);

  const CheckBtnClick = input => {
    if (input.value !== "") {
      save({ id, parentId, name: input.value });
      input.blur();
      setAdd(true);
      setCheck(false);
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
    name !== "" ? setCheck(true) : setCheck(false);
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
      <div className={style.FlexRow}>
        Группа:
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
         <div className={style.FlexRow}>
        <Check
          state={checkState}
          onClick={() => {
            CheckBtnClick(input);
          }}
        />
        <Delete
         style={control.Crud}
          onClick={() => {
            console.log("Удаление");
            remove({ id });
          }}
        /></div>
      </div>
      <List
        plus={
          <Plus
            onClick={e => {
              e.preventDefault();
              newElement();
              setAdd(false);
            }}
            state={add}
          />
        }
        items={
          <Elements
            setAdd={setAdd}
            refetch={refetch}
            remove={removeElement}
            elements={group.elements}
            changeName={changeElementName}
            checkBtnTrue={() => setAdd(true)}
          />
        }
      />
    </div>
  );
};
