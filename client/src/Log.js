import React from "react";

function randomColor(name) {
  let red = name > 5 ? name / 40 : name / 6;
  let grin = name > 5 ? name / 25 : name / 40;
  let blue = name > 5 ? name / 15 : name / 10;

  var r = Math.floor(red * 256),
    g = Math.floor(grin * 256),
    b = Math.floor(blue * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

const log = (BaseComponent) => (props) => {
  console.log(
    `%cRendering ${BaseComponent.name}`,
    `color: ${randomColor(BaseComponent.name.length)}`
  );
  return <BaseComponent {...props} />;
};

const funcLog = (funcName) =>
  console.log(
    `%cRendering ${funcName}`,
    `color: ${randomColor(funcName.length)}`
  );
export { log, funcLog };
// Разобраться со страницами в меню
// Добавить редактирование наименований и домена в меню
// Реализовать настройку стиля страницы при выборе через панель стилей
// Сделать сохранение стилей в базу и подгрузку в библиотеку стилей
// Добавить возможность создания текста
// Добавить возможность перетаскивания тегов