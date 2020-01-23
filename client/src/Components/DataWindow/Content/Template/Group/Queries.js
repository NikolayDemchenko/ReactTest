import gql from "graphql-tag";

export const GET_GROUP_BY_ID = gql`
  query GetGroupById($id: ID!) {
    group(id: $id) {
      id
      name
      parentId
      elements {
        name
        id
        templateId
        groupId
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
  mutation UpdateGroupName($group: Group!) {
    updateGroupName(group: $group) @client
  }
`;
export const ADD_GROUP = gql`
  mutation addGroup($name: String!, $parentId: ID!) {
    addGroup(name: $name, parentId: $parentId) {
      name
      id
      parentId
      elements {
        name
        id
        templateId
        groupId
      } 
    }
  }
`;
export const UPDATE_GROUP = gql`
  mutation UpdateGroup($id: ID!, $name: String!, $parentId: ID!) {
    updateGroup(id: $id, name: $name, parentId: $parentId) {
      name
      id
      parentId
      elements {
        name
        id
        templateId
        groupId
      } 
    }
  }
`;
export const DELETE_GROUP = gql`
  mutation DeleteGroup($id: ID!) {
    deleteGroup(id: $id)
  }
`;
