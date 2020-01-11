import React from "react";
import ClickedContainer from "../../../../../BaseComponents/ClickedContainer";
import NameComponent from "../../../../../BaseComponents/NameComponent";
import container from '../../../../../../Styles/Container.module.css'
import buttonStyle from "../../../../../../Styles/Buttons.module.css";
export default ({ style, save, remove, onClick, id, name, parentId }) => {
  // console.log("id объекта: ", id);
  return (
    <div className={style.Item}>
      <NameComponent
        name={name}
        btnStyle={buttonStyle.Crud}
        inputStyle={style.Input}
        containerStyle={container.FolderName}
        save={name =>
          save({
            id,
            name,
            parentId
          })
        }
        remove={() => remove(id)}
      />
      {id !== null ? (
        <ClickedContainer
          ClickHandler={onClick}
          style={{
            border: "1px solid black",
            width: "100%",
            height: "200px"
          }}
        />
      ) : (
        <div />
      )}
    </div>
  );
};
