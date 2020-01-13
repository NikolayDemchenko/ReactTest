import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import NavigationPanel from "../NavigationPanel/NavigationPanel";
import style from "../../../../Styles/Template.module.css";
import NameComponent from "../../../BaseComponents/NameComponent";
import controlStyle from "../../../../Styles/ControlStyle.module.css";
import container from "../../../../Styles/Container.module.css";
import Plus from "../../../Buttons/PlusButton/Plus";
import IsVisibleHOC from "../../../hoc/IsVisibleHOC";
import {GET_TEMPLATE_BY_ID} from './TemplateQueries'

export default id => {
  const { loading, error, data, client } = useQuery(GET_TEMPLATE_BY_ID, {
    variables: { id }
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log("data:", data.template.specsSheets);
  console.log("Загрузка шаблона");

  const Add = () =>
    IsVisibleHOC(Plus)({
      style: controlStyle.Crud,
      onClick: e => {
        e.preventDefault();
        // newFolder();
      }
    })(true);
    
  const specsSheets = data.template.specsSheets.map(specsSheet => (
    <div key={specsSheet.id} className={style.ColumnGroup}>   
        Имя группы :
        <input className={controlStyle.Input}
          defaultValue={specsSheet.name} />         
      <Add />
      {specsSheet.specs.map(spec => {
        return (
          <div key={spec.id}>
            <NameComponent
              name={spec.name}         
              style={container.BaseName}
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
        <Add />
        {specsSheets}
      </div>
    </div>
  );
};
