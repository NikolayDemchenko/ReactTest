const _units = [    
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
  // units.unshift({ name: "none",value:"" })
  export default units;