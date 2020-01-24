import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import container from "../../../../Styles/Container.module.css";
import Add from "../../../Buttons/Plus/TemplateItemPlus";
import Save from "../../../Buttons/Save/Save";
import Undo from "../../../Buttons/Undo/Undo";
import control from "../../../../Styles/ControlStyle.module.css";
import Groups from "./Group/Groups";
import save from "../../../../Function/UpdateOrCreate";

import { UPDATE_TEMPLATE } from "./TemplateQueries";
import { NEW_GROUP, UPDATE_GROUP_NAME } from "./Group/Queries";
export default ({ template, undo }) => {
  // const [update] = useMutation(upData);
  const [updateTemplate] = useMutation(UPDATE_TEMPLATE);
const {id,parentId}=template;
  const [newGroup] = useMutation(NEW_GROUP, {
    variables: { template  }
  });

  const [updateGroupName] = useMutation(UPDATE_GROUP_NAME);
  const changeName = (name, group) => {
    group.name = name;
    updateGroupName({ variables: { group } });
    setAdd(false);
  };

  const [add, setAdd] = useState(true);

  // console.log("Загрузка шаблона, Add:", add);
let input;
  return (
    <div>
      <NavigationPanel folder={template} />
      <div className={container.TemplateGrid}>
        <div className={container.FlexRow}>
          Имя шаблона :
          <input
            ref={node => {
              input = node;
            }}
            className={control.Input}
            defaultValue={template.name}
          />
          <Save
            onClick={() => {
              save(null, updateTemplate, {
                id,
                parentId,
                name: input.value
              });
            }}
          />
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
          template={template}
          refetch={undo}
        />
      </div>
    </div>
  );
};
