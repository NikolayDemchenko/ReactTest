import React, { useState } from "react";
import { plus } from "react-icons-kit/icomoon/plus";
import Icon from "react-icons-kit";
import SelectPanel from "../../SelectPanel/SelectPanel";
import htmlTags from "html-tags";
import { htmlTags as startTags } from "../../../Class/HtmlCss";
function CreateTag({ tag, setTags }) {
  const setItem = (item) => {
    console.log("item :>> ", item);
  };
  return (
    <SelectPanel
      startItems={startTags.map((item) => item.value)}
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
export default CreateTag;
