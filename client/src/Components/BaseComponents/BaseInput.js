import React from "react";
import DeleteButton from "Components/Buttons/DeleteButton/DeleteButton";
import controlStyle from '../../Styles/ControlStyle.module.css'
export default ({style, onClick, name }) => {
  let input;
  return (
    <div className={style}>
      <input
        placeholder="Введите наименование"
        ref={node => {
          input = node;
        }}
        className={controlStyle.Input}
        defaultValue={name}
      />     
      <DeleteButton     
        onClick={onClick}
      />
    </div>
  );
};
