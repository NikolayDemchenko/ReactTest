import { GET_FOLDER_BY_ID as query } from "../Folder/FolderQueries";
import { useQuery } from '@apollo/react-hooks';
import { GET_TEMPLATE_BY_ID } from "./TemplateQueries";

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
    }, 
    saveTemplate: (_root, {template}, { cache }) => {
      console.log("saveTemplate");
      // const {  data } = cache.readQuery(GET_TEMPLATE_BY_ID);
     // Удаление:
     // 1 Загрузить исходный шаблон из базы
     // 2 Перебрать группы исходного шаблона и сравнить с группами сохраняемой версии, перебрав список сохраняемых групп для каждой исходной группы, если соответсвующая группа не найдена, удалить исходную группу, если найдена, перебрать элементы группы и сравнить с элементами сохраняемой версии, перебрав список сохраняемых элементов для каждого исходного элемента, если соответсвующий элемент не найден, удалить исходный элемент, если найден идем дальше
     // Сохранение:
     // 1 Перебрать все группы в шаблоне, обновить существующие и создать не существующие используя функцию updateOrCreate
     // 2 В каждой группе, после обновления или создания, перебрать все элементы и обновить существующие или создать не существующие используя функцию updateOrCreate
     // 3 Обновить шаблон используя функцию updateOrCreate

     // console.log("Конец мутации");
    }
  }
  
};
