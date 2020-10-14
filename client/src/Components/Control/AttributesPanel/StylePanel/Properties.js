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
function Properties(props) {
  // console.log(
  //   "%cProperties-PropertiesPanel",
  //   'color: green');
  // console.log("props :>> ", props);
  const {
    draggedProp,
    setDraggedProp,
    panelStyle,
    setPanelStyle,
    setPreview,
  } = props;

  const properties = [];
  const propPanels = [];
  for (let key in panelStyle) {
    if (typeof panelStyle[key] !== "object") {
      properties.push({ [key]: panelStyle[key] });
    } else {
      propPanels.push({ [key]: panelStyle[key] });
    }
  }
  const setName = (item, value, chain) => {
    const prop = RenameObjectProperty(panelStyle, Object.keys(item)[0], value);

    setPanelStyle(prop, `\nsetName-Properties ${chain}`);
    setPreview(prop, `\nsetName-Properties ${chain}`);
  };
  const setValue = (item, value) => {
    // console.log('value :>> ', value);
    setPanelStyle({ ...panelStyle, [[Object.keys(item)[0]]]: value });
  };

  const remove = (item) => {

    console.log("remove property :>> ", item);
    const style=panelStyle
    delete style[Object.keys(item)[0]];
  console.log('style :>> ', style);

    setPanelStyle(style);
    setPreview(style);
  };

  const panels = propPanels.map((panel, index) => {
    const setPreviewPanel = (value) => {
      setPreview({ ...panelStyle, [Object.keys(panel)[0]]: value });
    };
    return (
      <PropertiesPanel
        {...props}
        name={Object.keys(panel)[0]}
        key={index}
        panelStyle={Object.values(panel)[0]}
        setName={(name, chain) => setName(panel, name, chain)}
        setPanelStyle={(panelStyle, chain) => setValue(panel, panelStyle, chain)}
        basepanelStyle={panelStyle}
        deletePanel={(chain) => remove(panel, chain)}
        setPreview={setPreviewPanel}
      />
    );
  });
  // console.log("properties", properties);
  const thisProps = properties.map((property, index) => {
    const setPreviewValue = (value) => {
      setPreview({ ...panelStyle, [Object.keys(property)[0]]: value });
    };

    const onDrop = (targetProp, draggedProp, target, chain) => {
      // console.log("draggedProp", draggedProp);
      const addNewProp = (foo) =>
        foo(
          removeProp(panelStyle, Object.keys(draggedProp)[0]),
          targetProp,
          draggedProp
        ).obj;
      if (target === "up") {
        setPanelStyle(addNewProp(addNewPropUp), `\nonDrop-Properties ${chain}`);
      } else if (target === "down") {
        setPanelStyle(
          addNewProp(addNewPropDown),
          `\nonDrop-Properties ${chain}`
        );
      }
    };
    return (
      <Property
        {...{ ...props, draggedProp, setDraggedProp }}
        key={index}
        // tabIndex={index}
        name={Object.keys(property)[0]}
        value={Object.values(property)[0]}
        setPreview={setPreviewValue}
        setName={(name, chain) => setName(property, name, chain)}
        setValue={(value, chain) => setValue(property, value, chain)}
        deleteProperty={(chain) => remove(property, chain)}
        onDrop={onDrop}
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
// export default Properties;
export default React.memo(log(Properties))