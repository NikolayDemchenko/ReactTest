import React, { useState } from "react";
import ModalInput from "../../ModalWindows/ModalInput/ModalInput";

function SaveComponent({componentId, saveNewComponent, saveComponent, title }) {
  // console.log('props', props)

  return (
    <div>
      {saveComponent&&componentId ? (
        <div
          style={{
            backgroundColor: "#456c",
            justifyContent: "center",
            padding: "0 10px",
            cursor: "pointer",
          }}
          onClick={(e) => {
            // e.stopPropagation();
            e.preventDefault();
            saveComponent();
          }}
        >
          {title}
        </div>
      ) : (
        <ModalInput setItem={saveNewComponent}>
          <div
            style={{
              backgroundColor: "#456c",
              justifyContent: "center",
              padding: "0 10px",
              cursor: "pointer",
            }}
          >
            {title}
          </div>
        </ModalInput>
      )}
    </div>
  );
}
export default SaveComponent;
