import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_TEMPLATE_BY_ID as query } from "./TemplateQueries";

import Template from "./Template";
export default id => {
  const variables = { id };
  const { loading, error, data, refetch,
    // client 
  } = useQuery(query, {
    variables,
    notifyOnNetworkStatusChange: true
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return <Template refetch={refetch} template={data.template} />;
};
