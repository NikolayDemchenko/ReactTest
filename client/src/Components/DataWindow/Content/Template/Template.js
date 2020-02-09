import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import container from "../../../../Styles/Container.module.css";
import { Plus, Save, Undo } from "../../../Buttons/AllButtons";
import { List } from "../../../hoc/AllHocs";
import control from "../../../../Styles/ControlStyle.module.css";
import Groups from "./Group/Groups";
import Instances from "./Instance/Instances";
import save from "../../../../Function/UpdateOrCreate";

import { UPDATE_TEMPLATE, SAVE_TEMPLATE } from "./TemplateQueries";
import { NEW_GROUP } from "./Group/Queries";
export default ({ template, undo }) => {
  // const [OldTemplate, SetTemplate] = useState({...template});
  // console.log("OldTemplate",OldTemplate)
  const [updateTemplate] = useMutation(UPDATE_TEMPLATE);
  const { id, parentId } = template;
  const [newGroup] = useMutation(NEW_GROUP, {
    variables: { template }
  });

  const DeleteField = (obj,field) => {
    delete obj[field];
    for (const key in obj) {
      if (obj[key] instanceof Object) {
        if (Array.isArray(obj[key])) {
          obj[key].forEach(element => {
            if (typeof element === "object") {
              DeleteField(element,field);
            }
          });
        } else {
          DeleteField(obj[key],field);
        }
      }
    }
    return obj;
  };
  const [saveTemplate] = useMutation(SAVE_TEMPLATE);
  const SaveTemp = (name, _item) => {
    let item =  JSON.parse(JSON.stringify(_item));
    item = DeleteField(item,"__typename");
    item.name = name;
    saveTemplate({ variables: { template: item } });
    console.log("_item",_item);
    console.log("item", item);
  };
  const [add, setAdd] = useState(true);

  let input;
  return (
    <div>
      <NavigationPanel folder={template} />
      <div className={container.TemplateGrid}>
        <div className={container.FlexRow}>
          Шаблон :
          <input
            ref={node => {
              input = node;
            }}
            className={control.Input}
            defaultValue={template.name}
          />
          <Save
            style={control.Crud}
            onClick={() => {
              SaveTemp(input.value, template);
              // save(null, updateTemplate, {
              //   id,
              //   parentId,
              //   name: input.value
              // });
            }}
          />
          <Undo
            style={control.Crud}
            onClick={() => {
              undo();
              setAdd(true);
            }}
          />
        </div>
        <List
          plus={
            <Plus
              onClick={e => {
                e.preventDefault();
                newGroup();
                setAdd(false);
                console.log("New Group2:", template.groups);
              }}
              state={add}
            />
          }
          items={
            <Groups
              add={add}
              setAdd={setAdd}
              template={template}
              refetch={undo}
            />
          }
        />
        <Instances
          add={add}
          setAdd={setAdd}
          template={template}
          refetch={undo}
        />
      </div>
    </div>
  );
};
