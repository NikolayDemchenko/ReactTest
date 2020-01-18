import React from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import container from "../../../../Styles/Container.module.css";
import Add from "../../../Buttons/PlusButton/TemplateItemPlus";
import Save from "../../../Buttons/SaveButton/SaveButton";
import Delete from "../../../Buttons/DeleteButton/DeleteButton";
import control from "../../../../Styles/ControlStyle.module.css";
import Groups from "./Group/Groups";
import { NEW_GROUP, UPDATE_GROUP_NAME } from "./TemplateQueries";
export default ({ template, client }) => {
  const [newGroup] = useMutation(NEW_GROUP, {
    variables: { template }
  });

  const [updateGroupName] = useMutation(UPDATE_GROUP_NAME);
  const changeName = (name,group) => {
    group.name=name
    updateGroupName({ variables: { template, group } });
  };

  const {AddGroup} = client.readQuery({
    query: gql`
      query GetItem {
        AddGroup @client
      }
    `
  });
  console.log("Загрузка шаблона, AddGroup:", AddGroup);

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
            console.log("New Group2:", template.groups);
          }}
          isVisible={AddGroup}
          // isVisible={!template.groups.find(item => item.name == "")}
        />
        <Groups changeName={changeName} template={template} />
      </div>
    </div>
  );
};
