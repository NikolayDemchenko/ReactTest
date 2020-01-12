import React from "react";
import FolderPlus from "Components/Buttons/PlusButton/FolderPlus";
export default (props) => {
  // Проверка на наличие в массиве несохраненной формы
  console.log("----- itemId: ", FolderPlus); 
  if (props.value !== null) {
    return <FolderPlus {...props} />;
  } else {
    return null;
  }
};
