import gql from "graphql-tag";
export const GET_TEMPLATE = gql`
  query GetTemplateById($id: ID!) {
    template(id: $id) @client {
      name
      id
      parentId
      updated
      groups {
        id
        name
      }
    }
  }
`;

const TemplateData = `{
  id
  name
  parentId
  groups {
    name
    visible
    filter
    id
    parentId
    elements {
      name
      filter
      visible
      id
      parentId
    }
  }
}
`;
export const GET_TEMPLATE_BY_ID = gql`
  query GetTemplateById($id: ID!) {
    template(id: $id) 
      ${TemplateData}    
  }
`;
export const ADD_TEMPLATE = gql`
  mutation AddTemplate($name: String!, $parentId: ID!) {
    addTemplate(name: $name, parentId: $parentId)  ${TemplateData}
  }
`;
export const UPDATE_TEMPLATE = gql`
  mutation UpdateTemplate($id: ID!, $name: String!, $parentId: ID!) {
    updateTemplate(id: $id, name: $name, parentId: $parentId) ${TemplateData}
  }
`;
export const SAVE_TEMPLATE = gql`
  mutation SaveTemplate($template: Template) {
    saveTemplate(template: $template)@client ${TemplateData}
  }
`;
export const DELETE_TEMPLATE = gql`
  mutation DeleteTemplate($id: ID!) {
    deleteTemplate(id: $id)
  }
`;
// Составной запрос
// const name = "name";
// const subData = `{id ${name} parentId}`;
// const dataBody = `query($parentId:ID){childFolders(parentId:$parentId)${subData}}`;
// const GET_FOLDER_CHILDS = gql`
//   ${dataBody}
// `;

// export const updateTemplate = template => {
//   console.log("Нало мутации :" );
//   const elements = group => `${
//     group.elements.map(
//       element => {
//         console.log("element.id.length:",element.id.length);
//         return `{
//        id: "${element.id.length===24?element.id:undefined}"
//        name: "${element.name}"
//      }`}
//     )
//   }`;
//   const groups = `${template.groups.map(
//     group =>
//       `{
//       id: "${group.id}"
//       name: "${group.name}"
//       elements:[${elements(group)}]
//     }`
//   )}`;
//   const mutation = `mutation {
//   updateTemplate(
//     id: "${template.id}"
//     name:" ${template.name}"
//     parentId: "${template.parentId}"
//     groups:[${groups}]
//   ) {
//     id
//     name
//     parentId
//     groups{
//       id
//       name
//       elements{
//         id
//         name
//         unitId
//       }
//     }
//   }
// }`;
//   console.log("Конец мутации :", mutation);
//   return  mutation;
// };

// export const REFETCH_TEMPLATE = gql`
//   mutation RefetchTemplate {
//     refetchTemplate @client
//   }
// `;
