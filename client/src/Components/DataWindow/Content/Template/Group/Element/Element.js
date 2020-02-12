import React, { useEffect } from "react";
import control from "../../../../../../Styles/ControlStyle.module.css";
import { useMutation } from "@apollo/react-hooks";
import style from "./Styles/Element.module.css";
import {
  CrudButton,
  ButtonsContainer
} from "../../../../../Buttons/ButtonsContainer";
import { UPDATE_ELEMENT_FIELDS } from "./Queries";
export default ({ data, remove }) => {
  const { template, group, element } = data;
  const { name } = element;

  const [updateElement] = useMutation(UPDATE_ELEMENT_FIELDS);
  const changeElement = name => {
    element.name = name;
    updateElement({ variables: { template, group, element } });
  };

  const VisibleClick = () => {
    element.visible = !element.visible;
    element.filter = false;
    updateElement({ variables: { template, group, element } });
  };
  const FilterClick = () => {
    if (element.visible === false) element.visible = true;
    element.filter = !element.filter;
    updateElement({ variables: { template, group, element } });
  };
  const keyPressEnter = (event, input) => {
    if (event.key === "Enter") {
      if (name !== "") {
        input.blur();
      }
      
    }
  };

  useEffect(() => {
    if (group.visible === false) {
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
        onChange={() => changeElement(input.value)}
        className={control.Input}
        defaultValue={name}
      />
      <ButtonsContainer
        containerStyle={CrudButton.Container}
        buttonStyle={CrudButton}
        Visible={{
          onClick: VisibleClick,
          state:
            group.visible === true
              ? element.visible === true
                ? "on"
                : "active"
              : null
        }}
        Filter={{
          onClick: FilterClick,
          state:
            group.visible === true
              ? element.filter === true
                ? "on"
                : "active"
              : null
        }}
        Delete={{ onClick: remove, state: "active" }}
      />
    </div>
  );
};
