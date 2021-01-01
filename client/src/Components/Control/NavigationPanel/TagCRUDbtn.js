import React from "react";
import { plus } from "react-icons-kit/icomoon/plus";
import { cross } from "react-icons-kit/icomoon/cross";
import Icon from "react-icons-kit";
import SelectPanel from "../ModalWindows/SelectPanel/SelectPanel";
import htmlTagsVoid from "html-tags/void";
function TagCRUDbtn({ parent = { id: null, type: "div" }, create, remove, elementList }) {
  // console.log('setPage :>> ', setPage);
  // console.log('htmlTagsVoid :>> ', Array.isArray(htmlTagsVoid) );
  // console.log('htmlTags', htmlTags)
  return (
    <div style={{ display: "flex" }}>
      {/* Добавление */}
      {!htmlTagsVoid.find((tagVoid) => tagVoid === parent.type) && (
        <SelectPanel
          items={elementList}  
          selected={""}
          setItem={(item) => create(item, parent)}
          button={
            <div
              style={{ margin: "0 0.2em", cursor: "pointer", width: "0.8em" }}
            >
              <Icon size={"100%"} icon={plus} />
            </div>
          }
        />
      )}

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
export default TagCRUDbtn;
