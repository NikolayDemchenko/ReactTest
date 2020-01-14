import React from "react";
import container from "../../../../../Styles/Container.module.css";
import control from "../../../../../Styles/ControlStyle.module.css";
import Element from "../../../../BaseComponents/BaseInput";
import Add from "../../../../Buttons/PlusButton/TemplateItemPlus";
import Delete from "../../../../Buttons/DeleteButton/DeleteButton";
export default ({ group, template, newElement }) => {
  return (
    <div key={group.id} className={container.FlexColumn}>
      Имя группы :
      <input className={control.Input} defaultValue={group.name} />
      <div className={container.FlexRow}>
        <Add
          onClick={e => {
            e.preventDefault();
            newElement({ variables: { template, group } });
          }}
          isVisible={!group.elements.find(item => item.name == "")}
        />
        <Delete />
      </div>
      {group.elements.map(el => {
        return (
          <div key={el.id}>
            <Element name={el.name} style={container.BaseName} onClick={null} />
          </div>
        );
      })}
    </div>
  );
};
