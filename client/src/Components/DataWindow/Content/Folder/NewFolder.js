import parentResolver from "./NewParentFolder";
import { merge } from "lodash";
import { GET_FOLDER_BY_ID as query } from "./FolderQueries";

const resolver = {
  Mutation: {
    newFolder: (_root, { name, id }, { cache }) => {
      // console.log("_root:", _root);
      let { folder } = cache.readQuery({ query, variables: { id } });
      const newFolder = {
        name,
        id: null,
        parentId: folder.id,
        __typename: "Folder"
      };
      folder.folders = [...folder.folders, newFolder];
      cache.writeQuery({ query, variables: { id }, data: { folder } });
      return newFolder;
    }
  }
};
export const resolvers = merge(resolver, parentResolver);
