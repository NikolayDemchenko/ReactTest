import React from "react";
import { NEW_ELEMENT } from "../TemplateQueries";
import {useMutation } from "@apollo/react-hooks";
import Group from "./Group";
export default ({ template }) => {
    const [newElement] = useMutation(NEW_ELEMENT);
    return template.groups.map(group=> <Group group={group} newElement={newElement} template={template} />)
  };