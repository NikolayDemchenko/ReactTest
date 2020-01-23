export default (create, update, variables) => {
  if (variables.name !== "") {
    
    if (typeof variables.id === 'number') {
      console.log("Создана группа: ", typeof variables.id);
      variables.id=null
      create({ variables });
    } else {
      update({ variables });
      console.log("Обновлена группа: ", variables.name);
    }
  }
};
