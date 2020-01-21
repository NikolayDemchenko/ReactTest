import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import container from "../../../../Styles/Container.module.css";
import Add from "../../../Buttons/Plus/TemplateItemPlus";
import Save from "../../../Buttons/Save/Save";
import Undo from "../../../Buttons/Undo/Undo";
import control from "../../../../Styles/ControlStyle.module.css";
import Groups from "./Group/Groups";
import { NEW_GROUP, UPDATE_GROUP_NAME, DELETE_GROUP } from "./TemplateQueries";
export default ({ template, undo }) => {
  const [newGroup] = useMutation(NEW_GROUP, {
    variables: { template }
  });

  const [updateGroupName] = useMutation(UPDATE_GROUP_NAME);
  const changeName = (name, group) => {
    group.name = name;
    updateGroupName({ variables: { template, group } });
    setAdd(false);
  };

  const [deleteGroup] = useMutation(DELETE_GROUP);
  const removeGroup = group => {
    deleteGroup({ variables: { template, group } });
    setAdd(true);
  };  
  const [add, setAdd] = useState(true);

  console.log("Загрузка шаблона, Add:", add);
  
  return (
    <div>
      <NavigationPanel folder={template} />
      <div className={container.TemplateGrid}>
        <div className={container.FlexRow}>
          Имя шаблона :
          <input className={control.Input} defaultValue={template.name} />
          <Save />
          <Undo
            onClick={() => {
              undo();
              setAdd(true);
            }}
          />
        </div>
        <Add
          onClick={e => {
            e.preventDefault();
            newGroup();
            setAdd(false);
            console.log("New Group2:", template.groups);
          }}
          isVisible={add}
        />
        <Groups
          add={add}
          setAdd={setAdd}
          changeName={changeName}
          remove={removeGroup}
          template={template}
        />
      </div>
    </div>
  );
};
