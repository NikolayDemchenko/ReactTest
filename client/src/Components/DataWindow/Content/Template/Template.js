import React from "react";
import {useMutation } from "@apollo/react-hooks";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import container from "../../../../Styles/Container.module.css";
import Add from "../../../Buttons/PlusButton/TemplateItemPlus";
import Save from "../../../Buttons/SaveButton/SaveButton";
import Delete from "../../../Buttons/DeleteButton/DeleteButton";
import control from "../../../../Styles/ControlStyle.module.css";
import DataGroups from "./Group/Groups";
import { NEW_GROUP} from "./TemplateQueries";
export default ({ template }) => {

  console.log("Загрузка шаблона");

  const [newGroup] = useMutation(NEW_GROUP, {
    variables: { template }
  });
  console.log("Groups:",template.groups)
  return (
    <div>
      <NavigationPanel folder={template} />
      <div className={container.TemplateGrid}>
        <div className={container.FlexRow}>
        Имя шаблона :
      <input className={control.Input} defaultValue={template.name} />
         
          <Save />
          <Delete />
        </div>
        <Add
            onClick={e => {
              e.preventDefault();
              newGroup();
            }}
            isVisible={!template.groups.find(item => item.name == "")}
          />
        <DataGroups  template={template} />
      </div>
    </div>
  );
};

