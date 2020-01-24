import React from "react";
import FolderPlus from "../../../../Buttons/Plus/FolderPlus";
import TemplatePlus from "../../../../Buttons/Plus/TemplatePlus";
import { FourBtnsContainer } from "../../../../../Styles/Container.module.css";
import { FolderCrud } from "../../../../../Styles/ControlStyle.module.css";
export default ({ tempVisible, setVisible, newFolder, newTemplate }) => {
  return (
    <div className={FourBtnsContainer}>
      <FolderPlus
        onClick={e => {
          e.preventDefault();
          newFolder();
          setVisible(false);
        }}
        style={FolderCrud}
      />
      {tempVisible === true ? (
        <TemplatePlus
        style={FolderCrud}
          onClick={e => {
            e.preventDefault();
            newTemplate();
            setVisible(false);
          }}
        />
      ) : (
        <div />
      )}
    </div>
  );
};
