import gql from "graphql-tag";
export const GET_TEMPLATE_BY_ID = gql`
  query GetTemplateById($id: ID!) {
    template(id: $id) {
      name
      id
      parentId
      updated
      groups {
        id
        name
        elements {
          id
          name
          unitId
        }
      }
    }
  }
`;
export const NEW_GROUP = gql`
  mutation NewGroup($template: Template) {
    newGroup(template: $template) @client 
  }
`;
export const NEW_ELEMENT = gql`
  mutation NewElement($template: Template,$group:Group) {
    newElement(template: $template,group:$group) @client 
  }
`;