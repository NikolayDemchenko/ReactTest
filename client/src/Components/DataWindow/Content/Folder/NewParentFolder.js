import gql from "graphql-tag";

const GET_FOLDERS = gql`
  query Folders {
    childFolders(parentId: null) {
      id
      name
      parentId
    }
  }
`;

export default{
  Mutation: {
    newParentFolder: (_root, { name, parentId }, { cache }) => {
      let { childFolders } = cache.readQuery({ query: GET_FOLDERS });
      const newFolder = {
        id: null,
        name,
        parentId,
        __typename: "Folder"
      };
      const data = { childFolders: [...childFolders, newFolder] };


      cache.writeQuery({query: GET_FOLDERS, data });
      return newFolder;
    }
  }
};