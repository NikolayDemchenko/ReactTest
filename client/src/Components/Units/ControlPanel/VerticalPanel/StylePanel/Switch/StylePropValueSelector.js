export default function StylePropValueSelector(value) {
  if (typeof value === "object") {
    return "object";
  } else {
    // Если есть пробел, то Строка
    if (value.match(/\s.|\//gm)) {
      return "string";      
    } else {
      // Если есть цифры
      if (value.match(/#\w+|rgba|rgb/gm)) {
        return "color";
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
