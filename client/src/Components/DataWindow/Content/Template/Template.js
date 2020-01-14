import React from "react";
import {useMutation } from "@apollo/react-hooks";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import container from "../../../../Styles/Container.module.css";
import Add from "../../../Buttons/PlusButton/TemplateItemPlus";
import Save from "../../../Buttons/SaveButton/SaveButton";
import Delete from "../../../Buttons/DeleteButton/DeleteButton";
import Groups from "./Group/Groups";
import { NEW_GROUP, NEW_ELEMENT } from "./TemplateQueries";
export default ({ template }) => {
  console.log("data:", template.groups);
  console.log("Загрузка шаблона");

  const [newGroup] = useMutation(NEW_GROUP, {
    variables: { template }
  });
  console.log("Вотета нах:",template.groups)
  return (
    <div>
      <NavigationPanel folder={template} />
      <div className={container.TemplateGrid}>
        <div className={container.FlexRow}>
          <Add
            onClick={e => {
              e.preventDefault();
              newGroup();
            }}
            isVisible={!template.groups.find(item => item.name == "")}
          />
          <Save />
          <Delete />
        </div>
        <DataGroups  template={template} />
      </div>
    </div>
  );
};
const DataGroups = ({ template }) => {
  const [newElement] = useMutation(NEW_ELEMENT);
  return <Groups newElement={newElement} template={template} />;
};
