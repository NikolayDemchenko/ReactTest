import React, { useState, useEffect } from "react";
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
import {
  useMutation
  //  useApolloClient
} from "@apollo/react-hooks";
import {
  DELETE_ELEMENT,
  NEW_ELEMENT
} from "../../Template/Group/Element/Queries";
export default ({ remove, add, setAdd, group, template, save, refetch }) => {
  const { id, visible, filter } = group;
  const parentId = template.id;

  const [updateGroup] = useMutation(UPDATE_GROUP_FIELDS);
  const changeName = name => {
    group.name = name;
    updateGroup({ variables: { template, group } });
    setAdd(false);
  };
  const VisibleClick = () => {
    group.visible = !group.visible;
    group.filter=false
    updateGroup({ variables: { template, group } });
    setAdd(false);
    setCheck("active");
  };
  const FilterClick = () => {
    if(group.visible===false)group.visible = true
    group.filter = !group.filter;
    updateGroup({ variables: { template, group } });
    setAdd(false);
    setCheck("active");
  };

  const [newElement] = useMutation(NEW_ELEMENT, {
    variables: { template, group }
  });
  const [deleteElement] = useMutation(DELETE_ELEMENT);
  const removeElement = element => {
    deleteElement({ variables: { template, group, element } });
    setAdd(true);
    // console.log("Тута!!!!!:",template);
  };


  const [checkState, setCheck] = useState("inactive");

  const CheckBtnClick = input => {
    if (input.value !== "") {
      save({ id, parentId, visible, filter, name: input.value });
      input.blur();
      setAdd(true);
      setCheck("inactive");
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
    name !== "" ? setCheck("active") : setCheck("inactive");
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
        <ButtonsContainer
          containerStyle={CrudButton.Container}
          buttonStyle={CrudButton}
          Visible={{
            onClick: VisibleClick,
            state: group.visible === true ? "on" : "active"
          }}
          Filter={{
            onClick: FilterClick,
            state: group.filter === true ? "on" : "active"
          }}
          Save={{
            onClick: () => {
              CheckBtnClick(input);
            },
            state: checkState
          }}
          Delete={{
            onClick: () => {
              console.log("Удаление");
              remove({ id });
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
            data={{template,group}}           
            checkBtnTrue={() => setAdd(true)}
          />
        }
      />
    </div>
  );
};
