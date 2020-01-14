import { GET_TEMPLATE_BY_ID as query } from "../../TemplateQueries";
export default {
  Mutation: {
    newElement: (_root, { template, group }, { cache }) => {
      console.log("template: ", template);
      console.log("id: ", group.id);
      const newElement = {
        id: null,
        name: "",
        __typename: "Element"
      };
      group.elements = [...group.elements, newElement];
      template.groups = template.groups.map(g => {
        if (g.id == group.id) {
          g = group;
        }
        return g
      });  
      cache.writeQuery({
        query,
        variables: { id: template.id },
        data: { template }
      });
      console.log("Конец мутации");
    }
  }
};
