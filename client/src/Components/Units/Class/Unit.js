const Module = (name, nameVisible, visible, backgroundColor, color) => {
  return { name, nameVisible, visible, backgroundColor, color };
};
const Entity = (
  id,
  name,
  nameVisible,
  visible,
  backgroundColor,
  color,
  image,
  imageVisible,
  value
) => {
  return {
    id,
    name,
    nameVisible,
    visible,
    backgroundColor,
    color,
    image,
    imageVisible,
    value
  };
};

const Container = (
  name,
  nameVisible,
  visible,
  backgroundColor,
  color,
  valueVisible,
  value = []
) => {
  return {
    name,
    nameVisible,
    visible,
    backgroundColor,
    color,
    valueVisible,
    value
  };
};
const InstanceContainer = (
  name,
  nameVisible,
  visible,
  backgroundColor,
  color,
  valueVisible,
  type,
  value = [],
  instances = []
) => {
  return {
    name,
    nameVisible,
    visible,
    backgroundColor,
    color,
    valueVisible,
    type,
    value,
    instances
  };
};

const Value = (
  type,
  name,
  nameVisible,
  visible,
  backgroundColor,
  color,
  valueVisible,
  value
) => {
  return {
    type,
    name,
    nameVisible,
    visible,
    backgroundColor,
    color,
    valueVisible,
    value
  };
};

const UnitValue = (
  type,
  name,
  nameVisible,
  visible,
  backgroundColor,
  color,
  valueVisible,
  value,
  unit
) => {
  return {
    type,
    name,
    nameVisible,
    visible,
    backgroundColor,
    color,
    valueVisible,
    value,
    unit
  };
};

const row = Value("row","цвет", true, true, "grey", "white", true, "красный");
const doc = Value("doc","статья", true, true, "grey", "white", true, "текст");
const img = Value("img","фото", true, true, "grey", "white", true, "ссылка");
const num = Value("num","класс", true, true, "grey", "white", true, 3);
const uNum = UnitValue("uNum","Протеин", true, true, "grey", "white", true, 15.7, "%");
const container = Container("Пшеница", true, true, "grey", "white", true);
const container2 = Container("Жопа", true, true, "grey", "white", true);
container.value.push(row);
container.value.push(num);
container.value.push(doc);
container.value.push(uNum);
container2.value.push(row);
container2.value.push(num);
container2.value.push(doc);
container2.value.push(uNum);
container.value.push(img);
container.value.push(container2);
console.log("container", container);
