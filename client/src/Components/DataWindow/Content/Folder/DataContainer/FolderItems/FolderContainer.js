import React, { useEffect } from "react";
import styles from "../../../Folder/Folder.module.css";
import updateOrCreateFolder from "Function/updateOrCreateFolder";
import setItem from "Function/setItem";
import AddButton from "Components/Buttons/PlusButton/AddButton";
import FolderComponent from "./FolderComponent";
import TemplateFolderComponent from "Components/DataWindow/Content/Template/TemplateFolderComponent";

export default ({
  style = styles,
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
  const folderItems = folders.map(folder => (
    <FolderComponent
      key={folder.id}
      name={folder.name}
      updateOrCreateFolder={updateCreate}
      removeFolder={removeFolder}
      FolderClick={FolderClick}
      folder={folder}
    />
  ));
  const templateItems =
    templates !== undefined
      ? templates.map(({ id, name }) => (
          <TemplateFolderComponent key={id} name={name} style={style} />
        ))
      : [];

  const items = [...folderItems, ...templateItems];
  // Сортировка
  items.sort((prev, next) => {
    if (prev.props.name < next.props.name) return -1;
    if (prev.props.name > next.props.name) return 1;
  });

  items.forEach(item => console.log("item name:", item.props.name));

  return (
    <div className={style.ContentContainer}>
      {items}
      <AddButton
        items={folders}
        style={style.AddItem}
        onClick={e => {
          e.preventDefault();
          newFolder();
        }}
      />
    </div>
  );
};
