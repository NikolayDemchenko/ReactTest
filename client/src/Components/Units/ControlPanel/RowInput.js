import React from "react";
import VisibleInput from '../../Buttons/Visible/Visible'
import ValueInput from './StringInput'
export default function RowInput  ({row,setRow,btnColor}) {
  const setVisible = () => {
    setRow({ ...row,visible:!row.visible});
    console.log("setVisible", !row.visible);
  };
  const setValue = value => {
    setRow({ ...row, value});
    console.log("setValue", value);
  };
  const setFont = font => {
    setRow({ ...row, font});
    console.log("setFont", font);
  };
  return (
    <div>
      {/* Ввод текста - реализован StringInput */}
      <ValueInput value={row.value} setValue={setValue} />
      {/* Видимость - реализован кнопка Visible */}
      <VisibleInput onClick={setVisible} color={row.visible?btnColor.on:btnColor.off}/>
      {/* Тип шрифта */}
      {/* <FontInput font={font} setFont={setFont} btnColor={btnColor}/> */}
    </div>
  );
};