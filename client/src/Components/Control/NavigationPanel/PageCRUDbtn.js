import React from "react";
import { plus } from "react-icons-kit/icomoon/plus";
import { cross } from "react-icons-kit/icomoon/cross";
import Icon from "react-icons-kit";
import ModalInput from "../ModalWindows/ModalInput/ModalInput";
function PageCRUDbtn({ create, remove }) {
  // console.log('setPage :>> ', setPage);
  // console.log('htmlTagsVoid :>> ', Array.isArray(htmlTagsVoid) );
  // console.log('htmlTags', htmlTags)
  return (
    <div style={{ display: "flex" }}>
      {/* Добавление */}
      <ModalInput setItem={(item) => create(item)}>
        <div style={{ margin: "0 0.2em", cursor: "pointer", width: "0.8em" }}>
          <Icon size={"100%"} icon={plus} />
        </div>
      </ModalInput>

      {/* Удаление */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          remove();
        }}
        style={{ margin: "0 0.2em", cursor: "pointer", width: "0.8em" }}
      >
        <Icon size={"100%"} icon={cross} />
      </div>
    </div>
  );
}
export default PageCRUDbtn;