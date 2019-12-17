import { GET_FOLDER_CHILDS as query  } from "./FolderQueries";

export default {
  Mutation: {
    newParentFolder: (_root, { name, parentId }, { cache }) => {
      console.log("parentId:", parentId);

      let { childFolders } = cache.readQuery({
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
        childFolders: [...childFolders, newFolder]
      } });
      return newFolder;
    }
  }
};
