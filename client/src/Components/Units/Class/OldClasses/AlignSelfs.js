const _values = [
    { name: "flex-start" },
    { name: "center" },
    { name: "flex-end" },
    { name: "baseline" },
    { name: "stretch" }
  ];
  
  const values = _values.map(item => {
    item.value = item.name;
    return item;
  });
  export default values;