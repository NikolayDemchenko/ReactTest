import React, { useState } from "react";
import Property from "./Property";
import PropertiesPanel from "./Panel";
import RenameObjectProperty from "./Function/RenameObjectProperty";
import { StyleContext } from "../../ControlsContext";
import {
  addNewPropUp,
  addNewPropDown,
  removePropByName,
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

  const props = properties.map((property) => {
    const setPreviewValue = (value) => {
      setPreview({ ...style, [Object.keys(property)[0]]: value });
    };

    // const addDropProp = (target) => {
    //   const newProps = [...props];
    //   const propIndex = newProps.indexOf(property);
    //   newProps.forEach((prop) => delete prop.target);
    //   newProps.splice(propIndex, 1, { ...property, target });
    //   setprops(newProps);
    // };

    const onDrop = (targetProp, draggedProp,target) => {
      if (target === "up") {
        const newUp = addNewPropUp(style, targetProp, draggedProp);
        console.log("newUp.arr", newUp.arr);
        setStyle(newUp.obj);
        // console.log("props", props);      
      } else if (target === "down") {
        const newDown = addNewPropDown(style, targetProp, draggedProp);
        console.log("newDown.arr", newDown.arr);
        // console.log("props", props);
        setStyle(newDown.obj);
       
      }

      console.log("targetProp", targetProp);
      console.log("draggedProp", draggedProp);
    };

    return (
      <Property
        key={properties.indexOf(property)}
        tabIndex={properties.indexOf(property)}
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
    <div >
      {props}
      {panels}
    </div>
  );
}
