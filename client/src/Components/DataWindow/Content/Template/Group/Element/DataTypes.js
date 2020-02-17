// Структура элемента
export const Name = ({ name }) => {
  return (
    <div>
      <input value={name} />
      <BtnsContainer exist={} visible={} />
    </div>
  );
};
export const Element = ({ name, nameVisible }) => {
  return (
    <div>
      <Name name={name} visible={} />
      <Type />
      <Settings visible={} type={} />
    </div>
  );
};

const Solution = {
  KeyValue: { key: value },
  Container:{ContainerType, value: [KeyValue] },

  value: Container || KeyValue || Row || Text || Image || Video || Audio 
};
// 1 Global settings:
//   1 nameSettings:
//     1 input
//     2 BtnContainer:
//       1 btn nameVisible: (on/off)
//   2 Settings:
//     2 BtnContainer:
//       1 btn globalVisible: (on/off)
//       2 btn Type: (data / inpit)
//       3 btn filter:(on/off)

// 2 Data:
//   1 choice Data types:
//     1 name: "Колекция" type: Array
//       1 Collection View:
//         1 Folder :{Icon,name}
//         2 Row:{Icon,name,settings,data}
//     2 name: "Строка" type:String
//     3 name: "Текст" type:String
//     4 name: "Число" type:Number
//     5 name: "Изображение" type:String
//       1  btn iconImage:(on/off)
//     6 name: "Видео" type:String
//     7 name: "Аудио" type:String

// 3 Динамический блок ввода и отображения данных
