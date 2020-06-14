// CSS
const units = [
  { name: "no" },
  { name: "px" },
  { name: "%" },
  { name: "em" },
  { name: "rem" },
  { name: "vw" },
  { name: "vh" },
  { name: "vmin" },
  { name: "vmax" },
  { name: "s" },
  { name: "deg" },
];

const cssUnits = units.map((item) => {
  if (item.name === "no") {
    item.value = "";
  } else {
    item.value = item.name;
  }
  return item;
});

const cssfunc = [
  { name: "attr" },
  { name: "blur" },
  { name: "brightness" },
  { name: "calc" },
  { name: "contrast" },
  { name: "drop-shadow" },
  { name: "grayscale" },
  { name: "hue-rotate" },
  { name: "invert" },
  { name: "linear-gradient" },
  { name: "opacity" },
  { name: "perspective" },
  { name: "radial-gradient" },
  { name: "repeating-linear-gradient" },
  { name: "repeating-radial-gradient" },
  { name: "rotate" },
  { name: "rotateX" },
  { name: "rotateY" },
  { name: "rotateZ" },
  { name: "saturate" },
  { name: "scale" },
  { name: "scaleX" },
  { name: "scaleY" },
  { name: "scaleZ" },
  { name: "sepia" },
  { name: "skew" },
  { name: "skewX" },
  { name: "skewY" },
  { name: "translate" },
  { name: "translateX" },
  { name: "translateY" },
  { name: "translateZ" },
  { name: "url" },
];

const cssFunc = cssfunc.map((item) => {
    item.value = item.name;
  return item;
});

// Html
const tags = [
  { name: "div" },
  { name: "input" },
  { name: "textarea" },
  { name: "img" },
  { name: "h1" },
  { name: "h2" },
  { name: "h3" },,
  { name: "p" },
];

const htmlTags = tags.map((item) => {
  item.value = item.name;
  return item;
});
export { cssUnits, htmlTags , cssFunc};
