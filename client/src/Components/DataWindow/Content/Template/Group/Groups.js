import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_GROUP, ADD_GROUP, DELETE_GROUP } from "./Queries";
import upOrCrFolder from "./Function/upOrCrGroup";
import Group from "./Group";
export default ({ refetch, setAdd, template, add, changeName }) => {
  const { groups } = template;

  const [createGroup] = useMutation(ADD_GROUP);
  const [updateGroup] = useMutation(UPDATE_GROUP);
  const [deleteGroup] = useMutation(DELETE_GROUP);
  const removeGroup = variables => {
    deleteGroup({ variables });
    setAdd(true);
    refetch();
  };
  const save = item => {
    upOrCrFolder(createGroup, updateGroup, item);
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
      changeName={name => changeName(name, group)}
    />
  ));
};
