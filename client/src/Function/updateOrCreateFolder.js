export default (create,update,item) => {
    // console.log(item.variables.id);
    if (item.id === null) {
      const newItem = (() => {
        const { name, parentId } = item;
        return { variables: { name, parentId } };
      })();
      create(newItem);
      console.log("Создана папка: ",item.name);
    } else {
      // console.log(item);
      update({variables: { ...item }});
    }
  };