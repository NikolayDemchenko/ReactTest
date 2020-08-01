import React from "react";
import Property from "./Property";
import PropertiesPanel from "./PropertiesPanel";
import RenameObjectProperty from "./Function/RenameObjectProperty";
import log from "../../../../Log";
import {
  addNewPropUp,
  addNewPropDown,
  removeThisLevelPropByName as removeProp,
} from "./Function/ObjectManager";
 function  Properties(props) {
  // console.log(
  //   "%cProperties-PropertiesPanel",
  //   'color: green');
  // console.log('props :>> ', props);
  const { draggedProp, setDraggedProp, style, setStyle, setPreview } = props;

  const properties = [];
  const propPanels = [];
  for (let key in style) {
    if (typeof style[key] !== "object") {
      properties.push({ [key]: style[key] });
    } else {
      propPanels.push({ [key]: style[key] });
    }
  }
  const setName = (item, value, chain) => {
    const prop = RenameObjectProperty(style, Object.keys(item)[0], value);

    setStyle(prop, `\nsetName-Properties ${chain}`);
    setPreview(prop, `\nsetName-Properties ${chain}`);
  };
  const setValue = (item, value, chain) => {
    setStyle(
      { ...style, [[Object.keys(item)[0]]]: value },
      `\nsetValue-Properties ${chain}`
    );
  };

  const remove = (item, chain) => {
    console.log("item :>> ", item);
    delete style[Object.keys(item)[0]];
    console.log("style :>> ", style);
    setStyle(style, `\nremove-Properties ${chain}`);
    setPreview(style);
  };
  const panels = propPanels.map((panel, index) => {
    const setPreviewPanel = (value) => {
      console.log("value :>> ", value);

      setPreview({ ...style, [Object.keys(panel)[0]]: value });
    };
    return (
      <PropertiesPanel
        {...props}
        name={Object.keys(panel)[0]}
        key={index}
        style={Object.values(panel)[0]}
        setName={(name, chain) => setName(panel, name, chain)}
        setStyle={(style, chain) => setValue(panel, style, chain)}
        baseStyle={style}
        deletePanel={(chain) => remove(panel, chain)}
        setPreview={setPreviewPanel}
      />
    );
  });
  // console.log("properties", properties);
  const thisProps = properties.map((property, index) => {
    const setPreviewValue = (value) => {
      setPreview({ ...style, [Object.keys(property)[0]]: value });
    };

    const onDrop = (targetProp, draggedProp, target, chain) => {
      // console.log("draggedProp", draggedProp);
      const addNewProp = (foo) =>
        foo(
          removeProp(style, Object.keys(draggedProp)[0]),
          targetProp,
          draggedProp
        ).obj;
      if (target === "up") {
        setStyle(addNewProp(addNewPropUp), `\nonDrop-Properties ${chain}`);
      } else if (target === "down") {
        setStyle(addNewProp(addNewPropDown), `\nonDrop-Properties ${chain}`);
      }
    };
    return (
      <Property
        key={index}
        tabIndex={index}
        // property={property}
        name={Object.keys(property)[0]}
        value={Object.values(property)[0]}
        setPreview={setPreviewValue}
        setName={(name, chain) => setName(property, name, chain)}
        setValue={(value, chain) => setValue(property, value, chain)}
        deleteProperty={(chain) => remove(property, chain)}
        onDrop={onDrop}
        {...{ draggedProp, setDraggedProp }}
      />
    );
  });

  return (
    <div>
      {thisProps}
      {panels}
    </div>
  );
}
export default Properties
// export default log(Properties)