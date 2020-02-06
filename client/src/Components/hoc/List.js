// Компоновочный элемент List служит для компоновки списка элементов с кнопкой добавления слева
import React from "react";
export default ({ plus, items }) => {
  return (
    <div style={{ display: "flex" }}>
      {plus}
      <div style={
          { 
          display: "flex", 
          flexDirection: "column",
          flexGrow:"1"
          }
          }>{items}</div>
    </div>
  );
};
