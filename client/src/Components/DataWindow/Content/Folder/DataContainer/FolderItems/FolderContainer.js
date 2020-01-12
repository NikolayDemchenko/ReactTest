import React, { useEffect } from "react";
import updateOrCreateFolder from "Function/updateOrCreateFolder";
import setItem from "Function/setItem";
import FolderPlus from "../../../../../Buttons/PlusButton/FolderPlus";
import IsVisibleHOC from "../../../../../hoc/IsVisibleHOC";
import FolderComponent from "./FolderComponent";
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
  useEffect(() => {
    return refetchFolder;
  }, [refetchFolder]);

  const updateCreate = item => {
    updateOrCreateFolder(createFolder, updateFolder, item);
  };
  const removeFolder = id => {
    if (id == null) {
      refetchFolder();
    } else {
      deleteFolder({ variables: { id } });
    }
  };
  const FolderClick = (id, type) => {
    setItem(client, id, type);
  };
  const folderItems = folders.map(({ id, name, parentId }) => (
    <FolderComponent
      key={id}
      id={id}
      name={name}
      parentId={parentId}
      style={style}
      save={updateCreate}
      remove={removeFolder}
      onClick={() => FolderClick(id)}
    />
  ));
  const templateItems =
    templates !== undefined
      ? templates.map(({ id, name }) => (
          <FolderComponent
            key={id}
            id={id}
            name={name}
            style={style}
            onClick={() => FolderClick(id, "Template")}
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
  // Проверка
  // items.forEach(item => console.log("item name:", item.props.name));

  const AddFolder = () =>
    IsVisibleHOC(FolderPlus)({
      style: style.AddItem,
      onClick: e => {
        e.preventDefault();
        newFolder();
      }
    })(
      items.find(i => i.props.id == null) == undefined
        ? 1
        : items.find(i => i.props.id == null).props.id
    );

  return (
    <div className={style.FolderContainer}>
      <AddFolder />
      {items}
    </div>
  );
};
