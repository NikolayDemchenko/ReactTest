import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";

export const GET_TEMPLATE_BY_ID = gql`
  query GetTemplateById($id: ID!) {
    template(id: $id) {
      name
      id
      folderId
      updated
      specsSheets {
        id
        name
        specs {
          id
          name
          unitId
        }
      }
    }
  }
`;

export default id => {
  const { loading, error, data, client } = useQuery(GET_TEMPLATE_BY_ID, {
    variables: { id }
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log("data:", data.template.specsSheets);
  console.log("Загрузка шаблона");

  const specsSheets = data.template.specsSheets.map(specsSheet => (
    <div className="specsSheet">
      <input defaultValue={specsSheet.name} />
      {specsSheet.specs.map(specs => (
        <div>
          <input className="specs" defaultValue={specs.name} />
          <select  className="specs" defaultValue={specs.unitId} />
        </div>
      ))}
    </div>
  ));

  return (
    <div>
      {/* <NavigationPanel folder={data.folder} /> */}
      <input defaultValue={data.template.name} />
      {specsSheets}
    </div>
  );
};
