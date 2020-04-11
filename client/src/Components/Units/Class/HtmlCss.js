const units = [
  { name: "px" },
  { name: "%" },
  { name: "em" },
  { name: "rem" },
  { name: "vw" },
  { name: "vh" },
  { name: "vmin" },
  { name: "vmax" }
];

const cssUnits = units.map(item => {
  item.value = item.name;
  return item;
});
const _tags = [
  { name: "div" },
  { name: "input" },
  { name: "textarea" },
  { name: "img" },
  { name: "h1" },
  { name: "h2" },
  { name: "h3" },
  { name: "h4" },
  { name: "h5" },
  { name: "p" }
];

const tags = _tags.map(item => {
  item.value = item.name;
  return item;
});
export { cssUnits, tags };
