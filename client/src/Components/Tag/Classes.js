const str =
  '{"index":0,"visible":true,"children":[],"tag":"div","style":{"display":"flex","flexDirection":"row","alignSelf":"center","height":"700px","width":"700px","backgroundColor":"#678","margin":"auto","marginTop":"60px","marginBottom":"60px","&:hover":{"height":"702px","width":"702px","boxShadow":"0 8px 5px 2px #0005","transition":"0.2s","marginBottom":"58px"},"&:active":{"height":"700px","width":"700px","boxShadow":"none","marginBottom":"60px"}}"attributes":{}}';

const newDiv = {
  // index: 0,
  // visible: true,
  // childrens: [],
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
  // index: 0,
  // visible: true,
  // childrens: [],
  type: "div",
  style: {
    height: "200px",
    width: "200px",
    backgroundColor: "#789",
    margin: "10px",
    marginBottom: "10px",
    "&:hover": {
      transform: "perspective(200px) scaleZ(-0.5) translateZ(-2px)",
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
const childs = [];
for (let i = 0; i < 100; i++) {
  childs.push(JSON.parse(JSON.stringify(innerDiv)));
}
const baseDiv = {
  // index: 0,
  // visible: true,
  // childrens: [],
  childrens: childs,
  type: "div",
  style: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignSelf: "center",
    height: "700.55px",
    width: "700px",
    // background:
    //   "repeating-linear-gradient(-45deg, #fff, #fff 25px, #e2edc1 25px, #e2edc1 50px) fixed",
    backgroundColor: "#567",
    // background:
    //   "url(https://avatars.mds.yandex.net/get-pdb/1366512/fd5d003c-7bc3-4f0d-9af2-2e57c88be5f9/s1200)",
    margin: "auto",
    marginTop: "60px",
    marginBottom: "60px",
    "@media (max-width: 800px)": {
      width: "200px",
    },
    "&:hover": {
      transform: "perspective(200px) scaleZ(-0.5) translateZ(-2px)",
      boxShadow: "0 8px 5px 2px #0005, inset 0 8px 5px 2px #00ffff",
      transition: "0.2s",
      marginBottom: "60px",
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
const page = {styles:[],};
const div = baseDiv;
// const div = JSON.parse(str);

export { newDiv, div, str };
