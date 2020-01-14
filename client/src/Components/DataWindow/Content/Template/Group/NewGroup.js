import { GET_TEMPLATE_BY_ID as query } from "../TemplateQueries";
export default {
  Mutation: {
    newGroup: (_root, { template }, { cache }) => {
      console.log("newTemplate: ",template);
      const newGroup = {
        id: null,
        name:"",
        elements:[],        
        __typename: "Group"
      };
      template.groups = [...template.groups, newGroup];
      cache.writeQuery({
        query,
        variables: { id: template.id },
        data: { template }
      });
      console.log("Конец мутации");   
    }
  }
};