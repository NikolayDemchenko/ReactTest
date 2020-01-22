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
// Составной запрос
const name = "name";
const subData = `{id ${name} parentId}`;
const dataBody = `query($parentId:ID){childFolders(parentId:$parentId)${subData}}`;
const GET_FOLDER_CHILDS = gql`
  ${dataBody}
`;

export const updateTemplate = template => {
  const elements = group => `${
    group.elements.map(
      element => {
        console.log("element", element);
        return `{
       id: "${element.id}"
       name: "${element.name}"                
     }`}
    )
  }`;
  
  const groups = `${template.groups.map(
    group =>
      `{
      id: "${group.id}"
      name: "${group.name}"
      elements:[${elements(group)}]        
    }`
  )}`;

  const mutation = `
  updateTemplate(
    id: "${template.id}"
    name:" ${template.name}"
    parentId: "${template.parentId}"
    groups:[${groups}]
  ) {
    id
    name
    parentId
    groups
  }`;
  console.log("Запрос :", mutation);
};

export const UPDATE_TEMPLATE = gql`
  mutation UpdateTemplate(
    $id: ID!
    $name: String!
    $parentId: ID!
    $groups: [GroupInput]
  ) {
    updateTemplate(id: $id, name: $name, parentId: $parentId, groups: $groups) {
      id
      name
      parentId
      groups
    }
  }
`;

export const NEW_GROUP = gql`
  mutation NewGroup($template: Template) {
    newGroup(template: $template) @client
  }
`;
export const UPDATE_GROUP_NAME = gql`
  mutation UpdateGroupName($template: Template, $group: Group) {
    updateGroupName(template: $template, group: $group) @client
  }
`;
export const DELETE_GROUP = gql`
  mutation DeleteGroup($template: Template, $group: Group) {
    deleteGroup(template: $template, group: $group) @client
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
export const DELETE_ELEMENT = gql`
  mutation DeleteElement(
    $template: Template
    $group: Group
    $element: Element
  ) {
    deleteElement(template: $template, group: $group, element: $element) @client
  }
`;
export const REFETCH_TEMPLATE = gql`
  mutation RefetchTemplate {
    refetchTemplate @client
  }
`;
