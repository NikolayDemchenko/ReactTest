import React from "react";
import PlusButton from "Components/Buttons/PlusButton/PlusButton";
export default ({items,onClick,style}) => {
  // Проверка на наличие в массиве несохраненной формы
  const itemId = items.length !== 0 ? items[items.length - 1].id : 1;
  if (itemId !== null) {
    return (
      <PlusButton
        style={style}
        onClick={onClick}
      />
    );
  } else {
    return <div />;
  }
};