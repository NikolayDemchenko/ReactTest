import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_TEMPLATE_BY_ID as query,
  UPDATE_TEMPLATE, updateTemplate
} from "./TemplateQueries";

import Template from "./Template";
export default id => {
  const variables = { id };
  const { loading, error, data, refetch } = useQuery(query, {
    variables,
    notifyOnNetworkStatusChange: true
  });
  const [update] = useMutation(updateTemplate(template));
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  const { template } = data;
  // const update = () => {
  //   // updateTemplate({ variables: template });
    
    
  // };
  // console.log("data.template", template);
  return (
    <Template update={update} undo={() => refetch()} template={template} />
  );
};
