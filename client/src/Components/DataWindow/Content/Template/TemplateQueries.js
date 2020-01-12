import gql from "graphql-tag";
export const GET_TEMPLATE_BY_ID = gql`
  query GetTemplateById($id: ID!) {
    template(id: $id) {
      name
      id
      parentId
      updated
      specsSheets {
        id
        name
        specs {
          id
          name
          unitId
        }
      }
    }
  }
`;