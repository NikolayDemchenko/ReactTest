import React, { useState } from "react";
import { plus } from "react-icons-kit/icomoon/plus";
import { cross } from "react-icons-kit/icomoon/cross";
import Icon from "react-icons-kit";
import SelectPanel from "../../SelectPanel/SelectPanel";
import htmlTags from "html-tags";
import { htmlTags as startTags } from "../../../Class/HtmlCss";
function CRUDTag({ tag, addTag, removeTag }) {
  // console.log('setPage :>> ', setPage);

  return (
    <div style={{ display: "flex" }}>
      {/* Добавление тега */}
      <SelectPanel
        items={startTags.map((item) => item.value)}
        allItems={htmlTags}
        selectedItem={""}
        setItem={(item) => addTag(item, tag)}
        button={
          <div style={{ margin: "0 0.2em", cursor: "pointer", width: "1em" }}>
            <Icon size={"100%"} icon={plus} />
          </div>
        }
      />
      {/* Удаление тега */}
      <div
        onClick={(e) => {
          e.stopPropagation()
          removeTag(tag.id);
        }}
        style={{ margin: "0 0.2em", cursor: "pointer", width: "1em" }}
      >
        <Icon size={"100%"} icon={cross} />
      </div>
    </div>
  );
}
export default CRUDTag;