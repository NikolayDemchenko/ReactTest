export default (create,update,item) => { 
    if (item.id === null && item.name!=="") {
      const newItem = (() => {
        const { name, parentId } = item;
        return { variables: { name, parentId } };
      })();
      create(newItem);
      console.log("Создана папка: ",item.name);
    } else if(item.name!==""){
      update({variables: { ...item }});
      console.log("Обновлена папка: ",item.name);
    }
  };