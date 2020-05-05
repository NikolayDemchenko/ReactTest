const _values = [
    { name: "row" },
    { name: "row-reverse" },
    { name: "column" },
    { name: "column-reverse" }
  ];
  
  const values = _values.map(item => {
    item.value = item.name;
    return item;
  });
  export default values;
  