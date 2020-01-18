import { GET_TEMPLATE_BY_ID as query } from "../TemplateQueries";
import { merge } from "lodash";

const isVisible = (cache, value) => {
  cache.writeData({
    data: {
      AddGroup: value
    }
  });
};

const NewGroup = {
  Mutation: {
    newGroup: (_root, { template }, { cache }) => {
      console.log("newTemplate: ", template);
      const newGroup = {
        id: Math.random(),
        name: "",
        elements: [],
        __typename: "Group"
      };

      isVisible(cache, false);

      template.groups = [...template.groups, newGroup];
      cache.writeQuery({
        query,
        variables: { id: template.id },
        data: { template }
      });
      console.log("Хуяк!!! Конец мутации");
    }
  }
};
const UpdateGroupName = {
  Mutation: {
    updateGroupName: (_root, { template, group }, { cache }) => {
      console.log("updateGroupName: ", group.name);

      template.groups = template.groups.map(g => {
        if (g.id == group.id) {
          g = group;        
        }
        return g;
      });
      cache.writeQuery({
        query,
        variables: { id: template.id },
        data: { template }
      });    
        isVisible(cache, true);  
      console.log("Хуяк!!! Конец мутации: ");
    }
  }
};
export default merge(NewGroup, UpdateGroupName);
