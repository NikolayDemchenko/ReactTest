import gql from "graphql-tag";

export const GET_GROUP_BY_ID = gql`
  query GetGroupById($id: ID!) {
    group(id: $id) {
      id
      name
      parentId
    }
  }
`;
export const NEW_GROUP = gql`
  mutation NewGroup($template: Template) {
    newGroup(template: $template) @client
  }
`;
export const UPDATE_GROUP_FIELDS = gql`
  mutation UpdateGroupFields($template: Template, $group: Group!) {
    updateGroupFields(template: $template, group: $group) @client
  }
`;
export const ADD_GROUP = gql`
  mutation addGroup(
    $name: String!
    $parentId: ID!
    $visible: Boolean!
    $filter: Boolean!
  ) {
    addGroup(
      name: $name
      parentId: $parentId
      visible: $visible
      filter: $filter
    ) {
      name
      filter
      visible
      id
      parentId
    }
  }
`;
export const UPDATE_GROUP = gql`
  mutation UpdateGroup(
    $id: ID!
    $name: String!
    $parentId: ID!
    $visible: Boolean!
    $filter: Boolean!
  ) {
    updateGroup(
      id: $id
      name: $name
      parentId: $parentId
      visible: $visible
      filter: $filter
    ) {
      name
      filter
      visible
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
export const DELETE_GROUP = gql`
  mutation DeleteGroup($id: ID!) {
    deleteGroup(id: $id)
  }
`;
