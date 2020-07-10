  const body = document.querySelector("body");
  const nameSelect = (index) => {
    switch (index) {
      case 1:
        return "Наименование";
      case 3:
        return "Адрес";
      case 5:
        return "Контакты";
      case 7:
        return "Профиль деятельности";
    }
  };
  let textNodes = [];
  function recursy(element) {
    element.childNodes.forEach((node) => {
      if (node.nodeName.match(/^TR/)) {
        let tableRow = [];
        node.childNodes.forEach((node,index) => {
          if (node.nodeName.match(/^TD/)) {    
            tableRow[nameSelect(index)] = node.textContent;
          } else {
            recursy(node);
          }
        });
        textNodes.push({ ...tableRow });
      } else {
        recursy(node);
      }
    });
  }
  recursy(body);
  console.log(textNodes);