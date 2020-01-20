import { GET_TEMPLATE_BY_ID as query } from "../TemplateQueries";
import { merge } from "lodash";
// import { setAddGroup } from "../Function/SetAdd";

export default {
  Mutation: {
    newGroup: (_root, { template }, { cache }) => {
      console.log("newTemplate: ", template);
      const newGroup = {
        id: Date.now(),
        name: "",
        elements: [],
        __typename: "Group"
      };

      // setAddGroup(cache, false);
      template.groups.unshift(newGroup);
      cache.writeQuery({
        query,
        variables: { id: template.id },
        data: { template }
      });
      console.log("Хуяк!!! Конец мутации");
    },
    updateGroupName: (_root, { template, group }, { cache }) => {
      console.log("updateGroupName: ", group.name);

      template.groups = template.groups.map(_group => {
        if (_group.id == group.id) {
          _group = group;
        }
        return _group;
      });
      cache.writeQuery({
        query,
        variables: { id: template.id },
        data: { template }
      });
      console.log("Хуяк!!! Конец мутации: ");
    }
  }
};
