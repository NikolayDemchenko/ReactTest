import React from "react";
import ModalInput from "../../ModalWindows/ModalInput/ModalInput";

function SavePage({pageId, saveNewPage, savePage, title }) {
  // console.log('props', props)

  return (
    <div>
      {savePage&&pageId ? (
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
            savePage();
          }}
        >
          {title}
        </div>
      ) : (
        <ModalInput setItem={saveNewPage}>
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
export default SavePage;
