export default function StylePropValueSelector(value) {
  if (typeof value === "object") {
    return "object";
  } else {
    if (value.match(/^(?!^rgba\(.*\)|\d|@|\W).*\(.*\).*$/gm)) {
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
}
