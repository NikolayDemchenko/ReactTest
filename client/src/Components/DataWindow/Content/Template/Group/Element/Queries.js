import gql from "graphql-tag";

export const GET_ELEMENT_BY_ID = gql`
  query GetElementById($id: ID!) {
    element(id: $id) {
      id
      name
      parentId
    }
  }
`;
export const NEW_ELEMENT = gql`
  mutation NewElement($template: Template, $group: Group) {
    newElement(template: $template, group: $group) @client
  }
`;

export const UPDATE_ELEMENT_NAME = gql`
  mutation UpdateElementName(
    $template: Template
    $group: Group
    $element: Element
  ) {
    updateElementName(template: $template, group: $group, element: $element)
      @client
  }
`;
export const ADD_ELEMENT = gql`
  mutation addElement($name: String!, $parentId: ID!) {
    addElement(name: $name, parentId: $parentId) {
      name
      id
      parentId
    }
  }
`;
export const UPDATE_ELEMENT = gql`
  mutation UpdateElement($id: ID!, $name: String!, $parentId: ID!) {
    updateElement(id: $id, name: $name, parentId: $parentId) {
      name
      id
      parentId
    }
  }
`;
export const DELETE_ELEMENT = gql`
  mutation DeleteElement($id: ID!) {
    deleteElement(id: $id)
  }
`;
