import React from "react";

function randColor(name) {
  let red = name > 5 ? name / 40 : name / 6;
  let grin = name > 5 ? name / 25: name / 40;
  let blue = name > 5 ? name / 15 : name / 10;

  var r = Math.floor(red * 256),
    g = Math.floor(grin * 256),
    b = Math.floor(blue * 256);
  return "#" + r.toString(16) + g.toString(16) + b.toString(16);
}

const log = (BaseComponent) => (props) => {
  // console.log(
  //   `%cRendering ${BaseComponent.name}`,
  //   `color: ${randColor(BaseComponent.name.length)}`
  // );
  return <BaseComponent {...props} />;
};
export default log;
// Не работает сброс частичного превью инпутов кроме цветового цветовой сбрасывет раньше
// Не работает отображение смены типа тега
// Сделать функцию назначения цвета и свичить её в функцию клика тега вместо функции выбора.
