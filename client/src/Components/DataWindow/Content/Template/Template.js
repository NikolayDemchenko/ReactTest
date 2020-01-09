import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import style from "../Folder/Folder.module.css";

export const GET_TEMPLATE_BY_ID = gql`
  query GetTemplateById($id: ID!) {
    template(id: $id) {
      name
      id
      parentId
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
    <div key={specsSheet.id} className="specsSheet">
      <input defaultValue={specsSheet.name} />
      {specsSheet.specs.map(spec => {
        let select;
        return(
        <div key={spec.id}>
          <input className="specs" defaultValue={spec.name} />
          <select
            onClick={() => console.log("Нажата кнопка выбора: ", select.value)}
            ref={node => {
              select = node;
            }}
            className="specs"
          >
            <optgroup label="Apple">
              <option value="iphone 6s">iPhone 6S</option>
              <option value="iphone 6s plus">iPhone 6S Plus</option>
              <option value="iphone 5se">iPhone 5SE</option>
            </optgroup>
            <optgroup label="Microsoft">
              <option value="lumia 950">Lumia 950</option>
              <option value="lumia 950 xl">Lumia 950 XL</option>
              <option value="lumia 650">Lumia 650</option>
            </optgroup>
          </select>
        </div>
      )})}
    </div>
  ));

  return (
    <div>
      <NavigationPanel folder={data.template} />
      <div className={style.ContentContainer}>
        {/* <input defaultValue={data.template.name} /> */}
        {specsSheets}
      </div>
    </div>
  );
};
