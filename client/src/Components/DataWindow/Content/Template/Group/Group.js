import React, { useState, useEffect } from "react";
import gql from "graphql-tag";
import style from "../Styles/Template.module.css";
import control from "../../../../../Styles/ControlStyle.module.css";
import Elements from "./Element/Elements";
import Add from "../../../../Buttons/PlusButton/TemplateItemPlus";
import Delete from "../../../../Buttons/DeleteButton/DeleteButton";
import { useMutation } from "@apollo/react-hooks";
import { NEW_ELEMENT,UPDATE_ELEMENT_NAME } from "../../Template/TemplateQueries";
import CheckButton from "../../../../Buttons/CheckButton/IsVisibleCheckBtn";
import {SetAddGroup} from "../Function/SetAdd";
import { useApolloClient } from "@apollo/react-hooks";
export default ({ group, template, changeName }) => {

  const [updateElementName] = useMutation(UPDATE_ELEMENT_NAME);
  const changeElementName = (name,element) => {
    element.name=name
    updateElementName({ variables: { template, group, element } });
  };

  const [newElement] = useMutation(NEW_ELEMENT, {
    variables: { template, group }
  });
  const client = useApolloClient();
  const { AddElement } = client.readQuery({
    query: gql`
      query GetItem {
        AddElement @client
      }
    `
  });

  const [isVisibleCheckBtn, setVisibleCheckBtn] = useState(false);

  const setName = input => {
    if (input.value !== "") {
      changeName(input.value);
      input.blur();
      SetAddGroup(client, true);
      setVisibleCheckBtn(false);
    }
  };
  const keyPressEnter = (event, input) => {
    if (event.key == "Enter") {
      console.log("enter press here! ");
      setName(input);
    }
  };

  const inputChange = name => {
    changeName(name);
    name !== "" ? setVisibleCheckBtn(true) : setVisibleCheckBtn(false);
  };
  console.log("isVisibleCheckBtn", isVisibleCheckBtn);

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
          onChange={() => inputChange(input.value)}
          onKeyPress={e => keyPressEnter(e, input)}
          className={control.Input}
          defaultValue={group.name}
        />
        <CheckButton
          isVisible={isVisibleCheckBtn}
          onClick={() => setName(input)}
        />
        <Delete />
      </div>
      <Add
        onClick={e => {
          e.preventDefault();
          newElement();
        }}
        isVisible={AddElement}      
      />
      <Elements elements={group.elements} changeName={changeElementName} />
    </div>
  );
};
