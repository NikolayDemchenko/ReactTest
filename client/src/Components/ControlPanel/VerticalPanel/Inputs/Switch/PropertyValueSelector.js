export default function PropertyValueSelector({ value, func, funcTemplate }) {
  console.log("typeof value :>> ", typeof value);
  let funcTempl = funcTemplate
    ? funcTemplate
    : /^(?!^rgba\(.*\)|\d|@|\W|\w+\(-*\w+\)).*\(.*\).*$/gm;
  if (value.match(funcTempl) && !func) {
    return "func";
  } else {
    // Если есть пробел, то мультиинпут
    if (value.match(/^(?!@).*\s/gm)) {
      return "multi";
    } else {
      // Если есть обозначение цвета
      if (value.match(/^#\w+|^rgba|^rgb/gm)) {
        return "color";
        // Если есть цифры
      } else if (value.match(/^\d+|^-\d+/gm)) {
        return "number";
      } else {
        return "string";
      }
    }
  }
}
