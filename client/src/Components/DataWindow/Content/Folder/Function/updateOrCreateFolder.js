export default (create, update, variables) => {
  if (variables.name !== "") {
    if (variables.id === null) {
      create({ variables });
      console.log("Создана папка: ", variables.name);
    } else {
      update({ variables });
      console.log("Обновлена папка: ", variables.name);
    }
  }
};
