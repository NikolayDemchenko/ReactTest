export default function StylePropValueSelector(value) {
  if (typeof value === "object") {
    return "object";
  } else {
    // Если есть пробел, то Строка
    if (value.match(/\s./gm)) { 
      return "multi";
    } else {
      if (value.match(/url.+/gm)) { 
        return "string";
      } else {
        // Если есть обозначение цвета
        const rgba = "rgba";
        if (value.match(new RegExp("#\\w+|" + rgba + "|rgb", "gm"))) {
          return "color";
          // Если есть цифры
        } else if (value.match(/\d/gm)) {
          {
            return "number";
          }
        } else {
          return "string";
        }
      }
    }
  }
}
