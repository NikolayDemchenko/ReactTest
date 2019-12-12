import gql from "graphql-tag";

export const GET_FOLDERS = gql`
  query Folders {
    childFolders(parentId: null) {
      id
      name
      parentId
    }
  }
`;

export const resolvers = {
  Mutation: {
    newFolder: (_root, { name, parentId }, { cache }) => {
      let { childFolders } = cache.readQuery({ query: GET_FOLDERS });
      const newFolder = {
        id: null,
        name,
        parentId,
        __typename: "Folder"
      };
      const data = { childFolders: [...childFolders, newFolder] };

      // console.log(...data.childFolders);

      cache.writeQuery({query: GET_FOLDERS, data });
      return newFolder;
    }
  }
};
