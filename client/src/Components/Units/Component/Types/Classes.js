const text = {
  visible: true,
  value: "Хуйпыжня",
  align: "center",
  font: {
    family: "Verdana",
    size: 50,
    color: [150, 170, 230, 100],
    style: {
      italic: true,
      weight: true,
      decoration: false
    }
  }
};
const rowElement = {
  type: "row",
  settings: {
    size: {
      height: "140px",
      width: "70%"
    },
    index: 0,
    color: [70, 99, 100, 100],
    visible: true
  },
  value: text
};
const docElement = {
  type: "doc",
  settings: {
    size: {
      height: "340px",
      width: "70%"
    },
    index: 0,
    color: [70, 99, 100, 100],
    visible: true
  },
  value: text
};
const imageElement = {
  type: "img",
  settings: {
    align: true,
    size: {
      height: "140px",
      width: "70%"
    },
    index: 0,
    color: [70, 99, 100, 100],
    visible: true
  },
  value:
    "https://avatars.mds.yandex.net/get-pdb/245485/4f6cb872-2c1d-4ad9-9e51-6f2334f8f074/s1200"
};

const keyValue2 = {
  type: "kv",
  key: rowElement,
  value: docElement
};
const keyValue = {
  type: "kv",
  key: rowElement,
  value: keyValue2
};
// const keyValueElement = {
//   type: "kv",
//     settings: {
//       size: {
//         height: "140px",
//         width: "70%"
//       },
//       index: 0,
//       color: [70, 99, 100, 100],
//       visible: true
//     },
//     value: keyValue
//   };
export { keyValue, rowElement, docElement, imageElement };
