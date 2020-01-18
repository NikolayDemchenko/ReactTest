import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_TEMPLATE_BY_ID } from "./TemplateQueries";
import Template from "./Template";
export default id => {
  const { loading, error, data, client } = useQuery(GET_TEMPLATE_BY_ID, {
    variables: { id }
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  client.writeData({
    data: {
      AddGroup: true,
      AddElement: true
    }
  });
  return <Template client={client} template={data.template} />;
};
