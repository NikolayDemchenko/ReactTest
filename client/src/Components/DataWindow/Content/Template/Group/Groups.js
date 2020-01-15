import React from "react";
import { NEW_ELEMENT } from "../TemplateQueries";
import {useMutation } from "@apollo/react-hooks";
import Group from "./Group";
export default ({ template }) => {
    
    return template.groups.map(group=> <Group key={group.id} group={group}  template={template} />)
  };