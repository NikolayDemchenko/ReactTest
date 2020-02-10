import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_GROUP, ADD_GROUP, DELETE_GROUP } from "./Queries";
import upOrCrGroup from "../../../../../Function/UpdateOrCreate";
import Group from "./Group";

export default ({ refetch, setAdd, template, add}) => {
  const { groups } = template;

  // const [updateGroupName] = useMutation(UPDATE_GROUP_NAME);
  // const changeName = (name, group) => {
  //   group.name = name;
  //   updateGroupName({ variables: { group } });
  //   setAdd(false);
  // };
  const [createGroup] = useMutation(ADD_GROUP);
  const [updateGroup] = useMutation(UPDATE_GROUP);
  const [deleteGroup] = useMutation(DELETE_GROUP);
  const removeGroup = variables => {
    if (typeof variables.id !== 'number'){
      deleteGroup({ variables });
    }
    setAdd(true);
    // refetch();
  };
  const save = item => {
    upOrCrGroup(createGroup, updateGroup, item);
    refetch();
    // console.log("!!!!!!!!!!!!!Сейвится",item);
  };

  // Сортировка
  // groups.sort((prev, next) => {
  //   if (prev.name < next.name) return -1;
  //   if (prev.name > next.name) return 1;
  //   return null;
  // });
  return groups.map(group => (
    <Group
      key={group.id}
      group={group}
      template={template}
      setAdd={setAdd}
      add={add}
      save={save}
      remove={removeGroup}
      refetch={refetch}
      // changeName={name => changeName(name, group)}
    />
  ));
};
