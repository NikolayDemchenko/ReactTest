import { GET_TEMPLATE_BY_ID as query } from "../TemplateQueries";

export default {
  Mutation: {
    newGroup: (_root, { template }, { cache }) => {
      console.log("newTemplate: ", template);
      const newGroup = {
        id: Date.now(),
        name: "",
        filter: false,
        visible: false,
        parentId: template.id,
        elements: [],
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

    updateGroupFields: (_root, { template, group }, { cache }) => {
      console.log("updateGroupFields: ", group);
      template.groups = template.groups.map(_group => {
        if (_group.id === group.id) {
          _group = group;
        }
        return _group
      });
      // console.log("Хуяк!!! Конец мутации: ", template.groups);
      cache.writeQuery({
        query,
        variables: { id: template.id },
        data: { template }
      });
    }
    // deleteGroup: (_root, { template, group }, { cache }) => {
    //   console.log("deleteGroup: ", group.name);
    //   template.groups = template.groups.filter(_group =>
    //     _group.id !== group.id ? true : false
    //   );
    //   cache.writeQuery({
    //     query,
    //     variables: { id: template.id },
    //     data: { template }
    //   });
    //   console.log("Хуяк!!! Конец мутации: ", template.groups);
    // }
  }
};
