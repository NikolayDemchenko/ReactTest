import React, { useEffect } from "react";
import {
  CrudButton,
  ButtonsContainer
} from "../../../../Buttons/ButtonsContainer";
import style from "../Styles/Template.module.css";
import control from "../../../../../Styles/ControlStyle.module.css";
import Elements from "./Element/Elements";
import { Plus } from "../../../../Buttons/AllButtons";
import { List } from "../../../../hoc/AllHocs";
import { UPDATE_GROUP_FIELDS } from "./Queries";
import { useMutation } from "@apollo/react-hooks";
import {
  DELETE_ELEMENT,
  NEW_ELEMENT
} from "../../Template/Group/Element/Queries";
export default ({ remove, add, setAdd, group, template, refetch }) => {
  const [updateGroup] = useMutation(UPDATE_GROUP_FIELDS,{ variables: { template, group } });
  const changeGroup = name => {
    group.name = name;
    updateGroup();
  };
  const VisibleClick = () => {
    group.visible = !group.visible;
    updateGroup();
  };
  const [newElement] = useMutation(NEW_ELEMENT, {
    variables: { template, group }
  });
  const [deleteElement] = useMutation(DELETE_ELEMENT);
  const removeElement = element => {
    deleteElement({ variables: { template, group, element } });
    setAdd(true);
  };
  const keyPressEnter = (event, input) => {
    if (event.key === "Enter") {
      if (input.value !== "") {
        input.blur();
      }
      console.log("enter press here! ");
    }
  };
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
            changeGroup(input.value);
          }}
          onKeyPress={e => keyPressEnter(e, input)}
          className={control.Input}
          defaultValue={group.name}
        />
        <ButtonsContainer
          containerStyle={CrudButton.Container}
          stateStyle={CrudButton}
          Visible={{
            onClick: VisibleClick,
            state: group.visible === true ? "on" : "active"
          }}
          Delete={{
            onClick: () => {
              console.log("Удаление");
              remove({ template, group });
            },
            state: "active"
          }}
        />
      </div>
      <List
        plus={
          <Plus
            onClick={e => {
              e.preventDefault();
              newElement();
            }}
            state={add}
          />
        }
        items={
          <Elements
            setAdd={setAdd}
            refetch={refetch}
            remove={removeElement}
            data={{ template, group }}
            checkBtnTrue={() => setAdd(true)}
          />
        }
      />
    </div>
  );
};