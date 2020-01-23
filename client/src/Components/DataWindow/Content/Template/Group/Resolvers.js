import { GET_TEMPLATE_BY_ID as query } from "../TemplateQueries";
import { GET_GROUP_BY_ID } from "./Queries";

export default {
  Mutation: {
    newGroup: (_root, { template }, { cache }) => {
      console.log("newTemplate: ", template);
      const newGroup = {
        id: Date.now(),
        name: "",
        parentId:template.id,
        // elements: [],
        __typename: "Group"
      };

      template.groups.unshift(newGroup);
      cache.writeQuery({
        query,
        variables: { id: template.id },
        data: { template }
      });
      console.log("Хуяк!!! Конец мутации");
    },
    
    updateGroupName: (_root, { group }, { cache }) => {
      console.log("updateGroupName: ", group);

      cache.writeQuery({
        query:GET_GROUP_BY_ID,
        variables: { group },
        data: { group }
      });
      console.log("Хуяк!!! Конец мутации: ");
    },
    deleteGroup: (_root, { template, group }, { cache }) => {
      console.log("deleteGroup: ", group.name);
      template.groups = template.groups.filter(_group =>
        _group.id !== group.id ? true : false
      );
      cache.writeQuery({
        query,
        variables: { id: template.id },
        data: { template }
      });
      console.log("Хуяк!!! Конец мутации: ", template.groups);
    }
  }
};
