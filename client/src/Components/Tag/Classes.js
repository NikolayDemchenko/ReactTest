const text = {
  visible: true,
  // value: "Хня",
  align: "center",
  font: {
    family: "Verdana",
    size: "16px",
    color: [150, 170, 230, 100],
    style: {
      italic: true,
      weight: true,
      decoration: false,
    },
  },
};
const settings = {
  flexDirection: "row",
  alignSelf: "center",
  size: {
    height: "100%",
    width: "100%",
  },
  index: 0,
  color: [70, 99, 100, 100],
  visible: true,
};
const baseType = {
  type: "cont",
  settings,
};
const rowType = {
  type: "row",
  settings,
  value: text,
};
const docType = {
  type: "doc",
  settings,
  value: text,
};
const imageType = {
  type: "img",
  settings,
  value: {
    reference:
      "https://avatars.mds.yandex.net/get-pdb/245485/4f6cb872-2c1d-4ad9-9e51-6f2334f8f074/s1200",
  },
};

const keyValueType = {
  type: "kv",
  settings: {
    flexDirection: "row",
    alignSelf: "center",
    size: {
      height: "900px",
      width: "80%",
    },
    index: 0,
    color: [70, 99, 100, 100],
    visible: true,
  },
  style: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    height: "160px",
    width: "320px",
    background: "rgba(70, 99, 100, 1)",
  },
  attributes: {},
  key: baseType,
  value: baseType,
};
const str =
  '{"index":0,"visible":true,"children":[],"tag":"div","style":{"display":"flex","flexDirection":"row","alignSelf":"center","height":"700px","width":"700px","backgroundColor":"#678","margin":"auto","marginTop":"60px","marginBottom":"60px","&:hover":{"height":"702px","width":"702px","boxShadow":"0 8px 5px 2px #0005","transition":"0.2s","marginBottom":"58px"},"&:active":{"height":"700px","width":"700px","boxShadow":"none","marginBottom":"60px"}}"attributes":{}}';

const newDiv = {
  index: 0,
  visible: true,
  childrens: [],
  type: "div",
  style: {
    height: "200px",
    width: "200px",
    backgroundColor: "#678",
    marginTop: "10px",
    marginBottom: "10px",
    "&:hover": {
      boxShadow: "0 8px 5px 2px #0005, inset 0 8px 5px 2px #00ffff",
      transition: "0.2s",
    },
    "&:active": {
      transition: "0s",
      boxShadow: "none",
    },
  },
  attributes: {},
};
const innerDiv = {
  index: 0,
  visible: true,
  childrens: [],
  type: "div",
  style: {
    height: "200px",
    width: "200px",
    backgroundColor: "#678",
    marginTop: "10px",
    marginBottom: "10px",
    "&:hover": {
      boxShadow: "0 8px 5px 2px #0005, inset 0 8px 5px 2px #00ffff",
      transition: "0.2s",
    },
    "&:active": {
      transition: "0s",
      boxShadow: "none",
    },
  },
  attributes: {},
};
const baseDiv = {
  index: 0,
  visible: true,
  childrens: [innerDiv],
  type: "div",
  style: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    height: "700.55px",
    width: "700px",
    background:
      "repeating-linear-gradient(-45deg, #fff, #fff 25px, #e2edc1 25px, #e2edc1 50px) fixed",
    backgroundColor: "#678",
    // background:
    //   "url(https://avatars.mds.yandex.net/get-pdb/1366512/fd5d003c-7bc3-4f0d-9af2-2e57c88be5f9/s1200)",
    margin: "auto",
    marginTop: "60px",
    marginBottom: "60px",
    "@media (max-width: 800px)": {
      width: "200px",
    },
    "&:hover": {
      height: "702px",
      width: "702px",
      boxShadow: "0 8px 5px 2px #0005, inset 0 8px 5px 2px #00ffff",
      transition: "0.2s",
      marginBottom: "58px",
      "@media (max-width: 800px)": {
        width: "200px",
      },
    },
    "&:active": {
      height: "700px",
      width: "700px",
      transition: "0s",
      boxShadow: "none",
      marginBottom: "60px",
      "@media (max-width: 800px)": {
        width: "200px",
      },
    },
  },
  attributes: {},
};
const div = baseDiv;
// const div = JSON.parse(str);

const newType = (type) => {
  switch (type) {
    case "div":
      return div;
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
export {
  newDiv,
  div,
  newType,
  baseType,
  rowType,
  docType,
  imageType,
  keyValueType,
};
