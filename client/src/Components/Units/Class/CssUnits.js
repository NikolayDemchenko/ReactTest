const _units = [
    { name: "" },
    { name: "px" },
    { name: "%" },
    { name: "em" },
    { name: "rem" },
    { name: "vw" },
    { name: "vh" },
    { name: "vmin" },
    { name: "vmax" },

  ];
  
  const units = _units.map(item => {
    item.value = item.name;
    return item;
  });
  export default units;