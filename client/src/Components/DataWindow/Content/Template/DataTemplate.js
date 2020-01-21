import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_TEMPLATE_BY_ID as query } from "./TemplateQueries";

import Template from "./Template";
export default id => {
  const variables = { id };
  const { loading, error, data, refetch } = useQuery(query, { variables,
    notifyOnNetworkStatusChange: true });

  
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
const templ=data.template

  console.log("data.template", templ);
  return <Template undo={() => refetch()} template={templ} />;
};
