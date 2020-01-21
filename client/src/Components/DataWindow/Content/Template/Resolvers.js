// import { DELETE_TEMPLATE_LAYOUT as query } from "./TemplateQueries";

// export default {
//   Mutation: {
//     deleteTemplateLayout: (_root, { template }, { cache }) => {
//       console.log("newTemplate: ", template);
     
//       cache.writeQuery({
//         query,
//         variables: { id: template.id },
//         data: { template }
//       });
//       console.log("Хуяк!!! Конец мутации");
//     }
//   }
// };
