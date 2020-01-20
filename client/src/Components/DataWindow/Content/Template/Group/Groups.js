import React from "react";
import Group from "./Group";
export default ({setAddState, template, changeName }) => {
  const { groups } = template;
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
      setAddState={setAddState}
      changeName={name => changeName(name, group)}
    />
  ));
};
