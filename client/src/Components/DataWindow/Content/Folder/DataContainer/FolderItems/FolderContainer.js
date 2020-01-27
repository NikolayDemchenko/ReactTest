import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import save from "../../../../../../Function/UpdateOrCreate";
import setItem from "Function/setItem";
import BtnsContainer from "../../ButtonsContainer/VisivleButtonsContainer";
import FolderComponent from "./FolderComponent";
import {
  ADD_TEMPLATE,
  UPDATE_TEMPLATE,
  DELETE_TEMPLATE
} from "../../../Template/TemplateQueries";
import folderStyle from "../../../../../../Styles/Folder.module.css";
export default ({
  client,
  folders,
  templates,
  tempVisible,
  folderFunctions: {
    createFolder,
    updateFolder,
    deleteFolder,
    newFolder,
    newTemplate,
    refetchFolder
  }
}) => {
  const [btnsVisible, setBtnsVisible] = useState(true);
  useEffect(() => {
    return refetchFolder;
  }, [refetchFolder]);
  // Редактирование Темплейта

  const [createTemplate] = useMutation(ADD_TEMPLATE);
  const [updateTemplate] = useMutation(UPDATE_TEMPLATE);
  const [deleteTemplate] = useMutation(DELETE_TEMPLATE);
  const removeTemplate = variables => {
    if (typeof variables.id === "string") {
      deleteTemplate({ variables });
    }
    setBtnsVisible(true);
    refetchFolder();
  };

  const removeFolder = id => {
    if (id == null) {
      refetchFolder();
    } else {
      deleteFolder({ variables: { id } });
    }
    setBtnsVisible(true);
  };
  const Click = (id, type) => {
    setItem(client, id, type);
  };
  const folderItems = folders.map(({ id, name, parentId }) => (
    <FolderComponent
      key={id}
      id={id}
      name={name}
      style={folderStyle}
      save={value => {
        save(createFolder, updateFolder, { id, parentId, name: value });
        setBtnsVisible(true);
      }}
      remove={() => {
        removeFolder(id);
      }}
      onClick={() => Click(id)}
    />
  ));
  const templateItems =
    templates !== undefined
      ? templates.map(({ id, name, parentId }) => (
          <FolderComponent
            save={value => {
              save(createTemplate, updateTemplate, {
                id,
                parentId,
                name: value
              });
              setBtnsVisible(true);
              refetchFolder();
            }}
            remove={() => removeTemplate({ id })}
            key={id}
            id={id}
            name={name}
            style={folderStyle}
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

  return (
    <div className={folderStyle.FolderContainer}>
      <BtnsContainer
        tempVisible={tempVisible}
        newFolder={newFolder}
        newTemplate={newTemplate}
        visible={btnsVisible}
        setVisible={setBtnsVisible}
      />
      {items}
    </div>
  );
};
