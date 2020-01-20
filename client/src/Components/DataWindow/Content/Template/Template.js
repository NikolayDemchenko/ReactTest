import React,{useState} from "react";
import gql from "graphql-tag";
import {useMutation } from "@apollo/react-hooks";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import container from "../../../../Styles/Container.module.css";
import Add from "../../../Buttons/PlusButton/TemplateItemPlus";
import Save from "../../../Buttons/SaveButton/SaveButton";
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
    setAddGroup(false)
  };
  const [addGroup, setAddGroup] = useState(true);

  // const {AddGroup} = client.readQuery({
  //   query: gql`
  //     query GetItem {
  //       AddGroup @client
  //     }
  //   `
  // });

  console.log("Загрузка шаблона, AddGroup:", addGroup);

  return (
    <div>
      <NavigationPanel folder={template} />
      <div className={container.TemplateGrid}>
        <div className={container.FlexRow}>
          Имя шаблона :
          <input className={control.Input} defaultValue={template.name} />
          <Save />        
        </div>
        <Add
          onClick={e => {
            e.preventDefault();
            newGroup();
            setAddGroup(false)
            console.log("New Group2:", template.groups);
          }}
          isVisible={addGroup}
        
        />
        <Groups setAddState={setAddGroup} changeName={changeName} template={template} />
      </div>
    </div>
  );
};
