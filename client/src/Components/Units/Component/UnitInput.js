import React from "react";

const Unit = {
  type: "unit",
  settings: { color: "white", visible: true },
  name: { value: null, settings: { color: "grey", visible: true } },
  value: null
};

const UnitInput = () => {
  return (
    <div>
      {/* Выбор типа */}
      <Select />
      <Settings />
      <Name />
    </div>
  );
};
const Settings = () => {
  return (
    <div>
      {/* Выбор цвета */}
      <Color />
      {/* Видимость */}
      <Visible/>
    </div>
  );
};
const Name = () => {
  return (
    <div>
      {/* Ввод текста */}
      <Value />      
      <Settings />
    </div>
  );
};
