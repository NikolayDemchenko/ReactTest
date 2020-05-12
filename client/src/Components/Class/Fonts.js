const _fonts = [
  { name: "Arial" },
  { name: "Arial Black" },
  { name: "Tahoma" },
  { name: "Verdana" },
  { name: "Lucida Sans Unicode" },
  { name: "Trebuchet MS" },
  { name: "MS Sans Serif" },
  { name: "Impact" },
  { name: "Century Gothic" },
  { name: "Times New Roman" },
  { name: "Georgia" },
  { name: "Palatino Linotype" },
  { name: "MS Serif" },
  { name: "Sylfaen" },
  { name: "Garamond" },
  { name: "Century" },
  { name: "Courier New" },
  { name: "Lucida Console" },
  { name: "Consolas" },
  { name: "Сomic Sans MS" },
  { name: "Monotype Corsiva" },
  { name: "Mistral" },
];

const fonts = _fonts.map(item => {
  item.value = item.name;
  return item;
});
export default fonts;
