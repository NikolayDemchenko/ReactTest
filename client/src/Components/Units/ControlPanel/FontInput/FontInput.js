import React from "react";
import FamilyInput from '../../Component/Select'
import Fonts from '../../Class/Fonts'
import ColorInput from '../ColorInput'
export default function FontInput ({ font, setFont, btnColor })  {
  const setFamily = family => {
    setFont({ ...font, family });
    console.log("font.family", family);
  };
  const setColor = color => {
    setFont({ ...font, color });
    console.log("font.color", color);
  };
  const setFontSize = size => {
    setFont({ ...font, size });
    console.log("font.size", size);
  };
  let input;
  return (
    <div>
      {/* Выбор шрифта */}
      <FamilyInput listItems={Fonts} defaultItem={font.family} setItem={type=>setFamily(type.value)} />
      {/* Размер шрифта */}
      <input
        type={"number"}
        ref={node => {
          input = node;
        }}
        onChange={() => {
          setFontSize(input.value); 
        }}     
        defaultValue={font.size}
      />
      {/* Выбор цвета */}
      <ColorInput setColor={setColor} color={font.color} />
      {/* Жирность */}
      {/* <WeightInput /> */}
      {/* Наклон */}
      {/* <StyleInput /> */}
      {/* Выравнивание */}
      {/* <AlignInput /> */}
      {/* Подчёркивание */}
      {/* <DecorationInput /> */}
    </div>
  );
};
