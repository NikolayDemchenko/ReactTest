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
      elements {
        id
        name
        unitId
      }
    }
  }
`;
export const GET_TEMPLATE_BY_ID = gql`
  query GetTemplateById($id: ID!) {
    template(id: $id) {
      id
      name
      parentId
      groups {
        name
        id
        parentId
        elements {
          name
          id
          parentId
        }
      }
    }
  }
`;

export const ADD_TEMPLATE = gql`
  mutation addTemplate($name: String!, $parentId: ID!) {
    addTemplate(name: $name, parentId: $parentId) {
      id
      name
      parentId
      elements {
        name
        id
        templateId
        groupId
      }
      groups {
        name
        id
        parentId
      }
    }
  }
`;
export const UPDATE_TEMPLATE = gql`
  mutation UpdateTemplate($id: ID!, $name: String!, $parentId: ID!) {
    updateTemplate(id: $id, name: $name, parentId: $parentId) {
      id
      name
      parentId
      groups {
        name
        id
        parentId
        elements {
          name
          id
          parentId
        }
      }
    }
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
