const text = {
  visible: true,
  // value: "Хня",
  align: "center",
  font: {
    family: "Verdana",
    size: 16,
    color: [150, 170, 230, 100],
    style: {
      italic: true,
      weight: true,
      decoration: false
    }
  }
};
const settings = {
  flexDirection:"row",
  alignSelf:"center",
  size: {
    height: "100%",
    width: "100%"
  },
  index: 0,
  color: [70, 99, 100, 100],
  visible: true
};
const baseType = {
  type: "cont",
  settings
};
const rowType = {
  type: "row",
  settings,
  value: text
};
const docType = {
  type: "doc",
  settings,
  value: text
};
const imageType = {
  type: "img",
  settings,
  value: {
    reference:
      "https://avatars.mds.yandex.net/get-pdb/245485/4f6cb872-2c1d-4ad9-9e51-6f2334f8f074/s1200"
  }
};

const keyValueType = {
  type: "kv",
  settings: {
    flexDirection:"row",
    alignSelf:"center",
    size: {
      height: "160px",
      width: "320px"
    },
    index: 0,
    color: [70, 99, 100, 100],
    visible: true
  },
  _____style: {
    flexDirection:"row",
    alignSelf:"center",
    size: {
      height: "160px",
      width: "320px"
    },
    index: 0,
    color: [70, 99, 100, 100],
    visible: true
  },
  key: baseType,
  value: baseType
};
const newType = type => {
  switch (type) {
    case "kv":
      return keyValueType;
    case "row":
      return rowType;
    case "unit":
      return;
    case "doc":
      return docType;
    case "num":
      return { rowType };
    case "img":
      return;
    case "video":
      return;
    case "cont":
      return baseType;
    case "iCont":
      return;
    default:
      return;
  }
};
export { newType, baseType, rowType, docType, imageType, keyValueType };
