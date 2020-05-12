import React from "react";
import Property from "./Property";
import PropertiesPanel from "./PropertiesPanel";
import RenameObjectProperty from "./Function/RenameObjectProperty";
// import { StyleContext } from "../../ControlsContext";
import {
  addNewPropUp,
  addNewPropDown,
  removeThisLevelPropByName as removeProp,
} from "./Function/ObjectManager";
export default function Properties({
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

  const props = properties.map((property,index) => {
    
    const setPreviewValue = (value) => {
      setPreview({ ...style, [Object.keys(property)[0]]: value });
    };

    const onDrop = (targetProp, draggedProp, target) => {
      const addNewProp = (foo) =>
        foo(
          removeProp(style, Object.keys(draggedProp)[0]),
          targetProp,
          draggedProp
        ).obj;
      if (target === "up") {
        setStyle(addNewProp(addNewPropUp));
      } else if (target === "down") {
        setStyle(addNewProp(addNewPropDown));
      }
    };

    return (
      <Property
        key={index}
        tabIndex={index}
        property={property}
        setPreview={setPreviewValue}
        setProperty={{
          setName: (v) => setName(property, v),
          setValue: (v) => setValue(property, v),
        }}
        deleteProperty={() => remove(property)}
        onDrop={onDrop}
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