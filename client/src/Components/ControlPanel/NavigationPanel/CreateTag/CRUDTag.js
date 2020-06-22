import React, { useState } from "react";
import { plus } from "react-icons-kit/icomoon/plus";
import Icon from "react-icons-kit";
import SelectPanel from "../../SelectPanel/SelectPanel";
import htmlTags from "html-tags";
import { htmlTags as startTags } from "../../../Class/HtmlCss";
function CRUDTag({ tag, addTag,removeTag }) {
  // console.log('setPage :>> ', setPage);
  const setItem = (item) => {
    addTag(item,tag)
    // console.log("item :>> ", item);
  };
  return (
    // Добавление тега
    <SelectPanel
      items={startTags.map((item) => item.value)}
      allItems={htmlTags}
      selectedItem={''}
      setItem={setItem}
      button={
        <div style={{ cursor: "pointer", width: "1em" }}>
          <Icon size={"100%"} icon={plus} />
        </div>
      }
    />
  );
}
export default CRUDTag;
