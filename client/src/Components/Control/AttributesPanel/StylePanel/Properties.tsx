import React, {
  FC,
  useState,
} from 'react';

import {
  TJssStyle,
  TStyleProperty,
} from '../../../../Types/BaseTypes';
import { IFCProperties } from '../../../../Types/IProps';
// import {log,funcLog} from "../../../../Log";
import {
  addNewPropDown,
  addNewPropUp,
  removeThisLevelPropByName as removeProp,
} from './Function/ObjectManager';
import { RenameObjectProperty } from './Function/RenameObjectProperty';
import PropertiesPanel from './PropertiesPanel';
import Property from './Property';

const Properties: FC<IFCProperties> = (props) => {
  // console.log(
  //   "%cProperties-PropertiesPanel",
  //   'color: green');
  // console.log("props :>> ", props);
  const { panelStyle, updateStyleData } = props;
  const [draggedProp, setDraggedProp] = useState<TStyleProperty | undefined>();
  console.log(`draggedProp`, draggedProp);
  const properties = [];
  const propPanels = [];
  for (let key in panelStyle) {
    if (typeof panelStyle[key] !== "object") {
      properties.push({ name: key, value: panelStyle[key] });
    } else {
      propPanels.push({ name: key, value: panelStyle[key] });
    }
  }

  const setName = (name: string, newName: string) => {
    const prop = RenameObjectProperty(panelStyle, name, newName);
    updateStyleData(prop);
  };
  const setValue = (name: string, value: string | TJssStyle) => {
    // console.log('value :>> ', value);
    updateStyleData({ ...panelStyle, [name]: value });
  };

  const remove = (item: TStyleProperty | TJssStyle) => {
    console.log("remove property :>> ", item);
    const style: TJssStyle = {};
    for (let prop in panelStyle) {
      if (prop !== item.name) {
        style[prop] = panelStyle[prop];
      }
    }
    // console.log("style :>> ", style);
    updateStyleData(style);
  };

  const panels = propPanels.map((panel, index) => {
    return (
      <PropertiesPanel
        {...props}
        key={index}
        name={panel.name}
        panelStyle={panel.value}
        setName={(name: string) => setName(panel.name, name)}
        updateStyleData={(panelStyle: TJssStyle) =>
          setValue(panel.name, panelStyle)
        }
        removePanel={() => remove(panel)}
      />
    );
  });
  // console.log("properties", properties);
  const thisProps = properties.map((property, index) => {
    // const setPreviewValue = (value) => {
    //   // console.log('value', value)
    //   setPreview({ ...panelStyle, [property.name]: value });
    // };

    const onDrop = (
      targetProp: TStyleProperty,
      draggedProp: TStyleProperty,
      target: string
    ) => {
      // console.log("draggedProp", draggedProp);
      const addNewProp = (foo: Function) =>
        foo(
          removeProp(panelStyle, Object.keys(draggedProp)[0]),
          targetProp,
          draggedProp
        ).obj;
      if (target === "up") {
        updateStyleData(addNewProp(addNewPropUp));
      } else if (target === "down") {
        updateStyleData(addNewProp(addNewPropDown));
      }
    };

    return (
      <Property
        {...{ ...props, draggedProp, setDraggedProp }}
        key={index}
        name={property.name}
        value={property.value as string}
        setName={(name: string) => setName(property.name, name)}
        setValue={(value: string) => setValue(property.name, value)}
        removeProperty={() => remove(property)}
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
};
export default Properties;
// export default log(Properties);
// export default React.memo(log(Properties));
