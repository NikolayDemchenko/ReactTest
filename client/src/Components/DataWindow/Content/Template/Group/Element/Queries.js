import gql from "graphql-tag";

export const GET_ELEMENT_BY_ID = gql`
  query GetElementById($id: ID!) {
    element(id: $id) {
      id
      filter
      visible
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

export const UPDATE_ELEMENT_FIELDS = gql`
  mutation UpdateElementFields(
    $template: Template
    $group: Group
    $element: Element
  ) {
    updateElementFields(template: $template, group: $group, element: $element)
      @client
  }
`;
export const ADD_ELEMENT = gql`
  mutation addElement(
    $name: String!
    $visible: Boolean!
    $filter: Boolean!
    $parentId: ID!
  ) {
    addElement(
      name: $name
      visible: $visible
      filter: $filter
      parentId: $parentId
    ) {
      name
      filter
      visible
      id
      parentId
    }
  }
`;
export const UPDATE_ELEMENT = gql`
  mutation UpdateElement(
    $id: ID!
    $name: String!
    $visible: Boolean!
    $filter: Boolean!
    $parentId: ID!
  ) {
    updateElement(
      id: $id
      name: $name
      visible: $visible
      filter: $filter
      parentId: $parentId
    ) {
      name
      filter
      visible
      id
      parentId
    }
  }
`;
// export const DELETE_ELEMENT = gql`
//   mutation DeleteElement($id: ID!) {
//     deleteElement(id: $id)
//   }
// `;

export const DELETE_ELEMENT = gql`
  mutation DeleteElement(
    $template: Template
    $group: Group
    $element: Element
  ) {
    deleteElement(template: $template, group: $group, element: $element) @client
  }
`;
