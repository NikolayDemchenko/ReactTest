import React from "react";
import FolderPlus from "Components/Buttons/PlusButton/FolderPlus";
export default ({ value, onClick, style }) => {
  // Проверка на наличие в массиве несохраненной формы
  console.log("----- itemId: ", value); 
  if (value !== null) {
    return <FolderPlus style={style} onClick={onClick} />;
  } else {
    return null;
  }
};
