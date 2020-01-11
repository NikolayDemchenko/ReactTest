import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import style from "../Template/Template.module.css";
import BaseComponent from "../../../BaseComponents/BaseComponent";
import buttonStyle from "Components/Buttons/Buttons.module.css";

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
    <div key={specsSheet.id} className={style.ColumnGroup}>
      <div className={style.RowGroup}>
        Группа :
        <BaseComponent
              name={specsSheet.name}
              btnStyle={buttonStyle.Crud}
              // inputStyle={style.Input}
              // save={name =>
              //   save({
              //     id,
              //     name,
              //     parentId
              //   })
              // }
              // remove={() => remove(id)}
            />      
      </div>
      {specsSheet.specs.map(spec => {
        return (
          <div key={spec.id}>
            <BaseComponent
              name={spec.name}
              btnStyle={buttonStyle.Crud}
              // inputStyle={style.Input}
              // save={name =>
              //   save({
              //     id,
              //     name,
              //     parentId
              //   })
              // }
              // remove={() => remove(id)}
            />           
          </div>
        );
      })}
    </div>
  ));

  return (
    <div>
      <NavigationPanel folder={data.template} />
      <div className={style.ContentContainer}>
        {/* <input defaultValue={data.template.name} /> */}
        {specsSheets}
        <button>
          <strong>Добавить</strong>
        </button>
      </div>
    </div>
  );
};
