import { GET_FOLDER_BY_ID as query } from "../Folder/FolderQueries";

export default {
  Mutation: {
    newTemplate: (_root, { folder }, { cache }) => {
      console.log("Старт мутации");
      const newTemplate = {
        name: "",
        id: null,
        parentId: folder.id,
        __typename: "Template"
      };
      folder.templates = [...folder.templates, newTemplate];
      cache.writeQuery({
        query,
        variables: { id: folder.id },
        data: { folder }
      });
      // console.log("Конец мутации");
    }
  }
};
