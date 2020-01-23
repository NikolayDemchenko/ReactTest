import React, { useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import save from "../../../../../../Function/UpdateOrCreate";
import setItem from "Function/setItem";
import FolderPlus from "../../../../../Buttons/Plus/FolderPlus";
import IsVisibleHOC from "../../../../../hoc/IsVisibleHOC";
import FolderComponent from "./FolderComponent";
import {
  ADD_TEMPLATE,
  UPDATE_TEMPLATE,
  DELETE_TEMPLATE
} from "../../../Template/TemplateQueries";
import style from "../../../../../../Styles/Folder.module.css";
export default ({
  client,
  folders,
  templates,
  folderFunctions: {
    createFolder,
    updateFolder,
    deleteFolder,
    newFolder,
    refetchFolder
  }
}) => {
  // Редактирование Темплейта
  const [createTemplate] = useMutation(ADD_TEMPLATE);
  const [updateTemplate] = useMutation(UPDATE_TEMPLATE);
  const [deleteTemplate] = useMutation(DELETE_TEMPLATE);
  const removeTemplate = variables => {
    if (typeof variables.id !== "number") {
      deleteTemplate({ variables });
    }
    refetchFolder();
  };

  useEffect(() => {
    return refetchFolder;
  }, [refetchFolder]);

  const removeFolder = id => {
    if (id == null) {
      refetchFolder();
    } else {
      deleteFolder({ variables: { id } });
    }
  };
  const Click = (id, type) => {
    setItem(client, id, type);
  };
  const folderItems = folders.map(({ id, name, parentId }) => (
    <FolderComponent
      key={id}
      id={id}
      name={name}
      style={style}
      save={value =>
        save(createFolder, updateFolder, { id, parentId, name: value })
      }
      remove={() => removeFolder(id)}
      onClick={() => Click(id)}
    />
  ));
  const templateItems =
    templates !== undefined
      ? templates.map(({ id, name,parentId }) => (
          <FolderComponent
            save={value => save(createTemplate, updateTemplate, { id, parentId, name: value })}
            remove={() => removeTemplate({ id })}
            key={id}
            id={id}
            name={name}
            style={style}
            onClick={() => Click(id, "Template")}
          />
        ))
      : [];

  const items = [...folderItems, ...templateItems];
  // Сортировка
  items.sort((prev, next) => {
    if (prev.props.name < next.props.name) return -1;
    if (prev.props.name > next.props.name) return 1;
    return null;
  });

  const AddFolder = () =>
    IsVisibleHOC(FolderPlus)({
      style: style.AddItem,
      onClick: e => {
        e.preventDefault();
        newFolder();
      }
    })(!items.find(item => item.props.id == null));

  return (
    <div className={style.FolderContainer}>
      <AddFolder />
      {items}
    </div>
  );
};
