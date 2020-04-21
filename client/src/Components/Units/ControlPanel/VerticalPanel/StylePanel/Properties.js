import React from "react";
import Property from "./Property";
import PropertiesPanel from "./Panel";
import RenameObjectProperty from "../../../Function/RenameObjectProperty";
import { addNewPropUp, addNewPropDown } from "./Function/DragDrop";
export default function Styles({
  style,
  setStyle,
  setPreview,
  setSelected,
  selected,
  parentName,
}) {
  const properties = [];
  const propPanels = [];
  for (let key in style) {
    if (typeof style[key] !== "object") {
      properties.push({ [key]: style[key] });
    } else {
      propPanels.push({ [key]: style[key] });
    }
  }
  const setName = (item, value) => {
    setStyle(RenameObjectProperty(style, Object.keys(item)[0], value));
  };
  const setValue = (item, value) => {
    setStyle({ ...style, [Object.keys(item)[0]]: value });
  };
  const remove = (item) => {
    delete style[Object.keys(item)[0]];
    setStyle(style);
  };

  const panels = propPanels.map((panel) => {
    return (
      <PropertiesPanel
        parentName={parentName}
        name={Object.keys(panel)[0]}
        key={propPanels.indexOf(panel)}
        style={Object.values(panel)[0]}
        setName={(v) => setName(panel, v)}
        setStyle={(v) => setValue(panel, v)}
        baseStyle={style}
        setPreview={setPreview}
        selected={selected}
        setSelected={setSelected}
        deletePanel={() => remove(panel)}
      />
    );
  });

  const props = properties.map((property) => {
    const setPreviewValue = (value) => {
      setPreview({ ...style, [Object.keys(property)[0]]: value });
    };

    const removePropByKey = (obj, name) => {
      for (let key in obj) {
        if (key === name) {
          delete obj[key];
        }
      }
      console.log("obj", obj);
      return obj;
    };
    const newProp = (foo) => {
      const item = foo(
        removePropByKey(style, "field"),
        property,
        "field",
        "field"
      );
      console.log(foo.name, item);
      setStyle(item);
    };

    return (
      <Property
        key={properties.indexOf(property)}
        property={property}
        setPreview={setPreviewValue}
        setProperty={{
          setName: (v) => setName(property, v),
          setValue: (v) => setValue(property, v),
        }}
        deleteProperty={() => remove(property)}
        addNewPropUp={() => newProp(addNewPropUp)}
        addNewPropDown={() => newProp(addNewPropDown)}
        dragLeave={()=>setStyle(removePropByKey(style, "field"))}
      />
    );
  });
  return (
    <div>
      {props}
      {panels}
    </div>
  );
}
