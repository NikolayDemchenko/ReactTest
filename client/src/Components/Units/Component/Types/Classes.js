const text = {
    visible: true,
    value: null,
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
    settings: {
      size: {
        height: "140px",
        width: "70%"
      },
      index: 0,
      type: "row",
      color: [70, 99, 100, 100],
      visible: true
    },
    value: text
  };
  const docElement = {
    settings: {
      size: {
        height: "340px",
        width: "70%"
      },
      index: 0,
      type: "doc",
      color: [70, 99, 100, 100],
      visible: true
    },
    value: text
  };
  const imageElement = {
    settings: {
      align: true,
      size: {
        height: "140px",
        width: "70%"
      },
      index: 0,
      type: "img",
      color: [70, 99, 100, 100],
      visible: true
    },
    value:
    "https://avatars.mds.yandex.net/get-pdb/245485/4f6cb872-2c1d-4ad9-9e51-6f2334f8f074/s1200"
  };
  const keyValue = { key: rowElement, value: docElement };
  const keyValueElement = {
    settings: {
      size: {
        height: "140px",
        width: "70%"
      },
      index: 0,
      type: "kv",
      color: [70, 99, 100, 100],
      visible: true
    },
    value: keyValue
  };
  export {rowElement,docElement,imageElement,keyValueElement}