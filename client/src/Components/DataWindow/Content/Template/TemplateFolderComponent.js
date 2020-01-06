import React from "react";
import ClickedContainer from "Components/ClickedContainer";
export default ({ Click, name, style }) => {
  const Component = () => {
    return (
      <div className={style.Item}>
        <input
          placeholder="Введите наименование"
          className={style.Input}
          defaultValue={name}
        />    
      </div>
    );
  };
  return (
    <ClickedContainer
      Component={<Component />}
      ClickHandler={Click}
      style={{
        border: "1px solid black",
        width: "100%",
        height: "100%"
      }}
    />
  );
};
