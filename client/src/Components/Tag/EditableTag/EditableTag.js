import React, { useState, useEffect } from "react";
import Element from "./Element";
import AttributesPanel from "../../ControlPanel/AttributesPanel/AttributesPanel";
const EditableTag = (props) => {
  // console.log("Tag-Page props",props);

  const [preview, setPreview] = useState(props.tag);
  const [func, setFunc] = useState({ styleFilter: (p) => p });

  return (
    <div>
      <AttributesPanel
        preview={preview}
        setPreview={setPreview}
        setFunc={setFunc}
      />
      <div id={props.tag.id} style={{ outline: "1px dashed #5af" }}>
        <Element {...props} tag={func.styleFilter(preview)} />
      </div>
    </div>
  );
};

export default EditableTag;
