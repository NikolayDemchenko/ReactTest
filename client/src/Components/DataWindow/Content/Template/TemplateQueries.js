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
export const UPDATE_GROUP_NAME = gql`
  mutation UpdateGroupName($template: Template,$group:Group) {
    updateGroupName(template: $template,group:$group) @client 
  }
`;
export const NEW_ELEMENT = gql`
  mutation NewElement($template: Template,$group:Group) {
    newElement(template: $template,group:$group) @client 
  }
`;
export const UPDATE_ELEMENT_NAME = gql`
  mutation UpdateElementName($template: Template,$group:Group,$element:Element) {
    updateElementName(template: $template,group:$group,element:$element) @client 
  }
`;