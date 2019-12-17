import { GET_FOLDER_BY_ID as query } from "./folderQueries";

export default {
  Mutation: {
    newFolder: (_root, { name, folder }, { cache }) => {
      // console.log("_root:", _root);
      const newFolder = {
        name,
        id: null,
        parentId: folder.id,
        __typename: "Folder"
      };
      folder.folders = [...folder.folders, newFolder];
      cache.writeQuery({ query, variables: { id:folder.id }, data: { folder } });
      return newFolder;
    }
  }
};

