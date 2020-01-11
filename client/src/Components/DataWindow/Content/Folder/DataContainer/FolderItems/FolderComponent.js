import React from "react";
import ClickedContainer from "Components/ClickedContainer";
import buttonStyle from "Components/Buttons/Buttons.module.css";
import BaseComponent from "../../../../../BaseComponents/BaseComponent";
export default ({ style, save, remove, onClick, id, name, parentId }) => {
  let input;
  console.log("id объекта: ", id);
  return (
    <div className={style.Item}>
      <BaseComponent
        name={name}
        btnStyle={buttonStyle.Crud}
        inputStyle={style.Input}
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
