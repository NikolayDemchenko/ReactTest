import gql from "graphql-tag";

// Запрос на получение Типа и идентификатора объекта
export const GET_DATA = gql`
  query GetItem {
    ItemType @client
    ItemId @client  
  }
`;