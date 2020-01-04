import React from "react";
import PlusButton from "Components/Buttons/PlusButton/PlusButton";
export default ({items,onClick,style}) => {
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