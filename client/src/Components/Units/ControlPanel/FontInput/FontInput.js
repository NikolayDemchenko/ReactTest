import React from "react";
export default FontInput = ({ font, setFont, btnColor }) => {
  const setColor = color => {
    setFont({ ...font, color });
    console.log("font.color", color);
  };
  return (
    <div>
      {/* Выбор шрифта */}
      <FamilyInput />
      {/* Размер шрифта */}
      <SizeInput />
      {/* Выбор цвета */}
      <ColorInput onClick={setColor} color={color} />
      {/* Жирность */}
      <WeightInput />
      {/* Наклон */}
      <StyleInput />
      {/* Выравнивание */}
      <AlignInput />
      {/* Подчёркивание */}
      <DecorationInput />
    </div>
  );
};
