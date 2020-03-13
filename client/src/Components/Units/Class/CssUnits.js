const _units = [
    { name: "px" },
    { name: "%" },

  ];
  
  const units = _units.map(item => {
    item.value = item.name;
    return item;
  });
  export default units;