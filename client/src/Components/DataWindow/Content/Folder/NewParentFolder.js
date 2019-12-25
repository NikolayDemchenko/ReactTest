import { GET_PARENT_FOLDERS as query  } from "./folderQueries";

export default {
  Mutation: {
    newParentFolder: (_root, { name, parentId }, { cache }) => {
      console.log("parentId:", parentId);

      let { parentFolders } = cache.readQuery({
        query,
        variables: { parentId }
      });
      const newFolder = {
        id: null,
        name,
        parentId,
        __typename: "Folder"
      };
      cache.writeQuery({ query,
        variables: { parentId },
        data:{
          parentFolders: [...parentFolders, newFolder]
      } });
      return newFolder;
    }
  }
};
