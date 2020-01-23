export default (create, update, variables) => {
  if (variables.name !== "") {
    if (typeof variables.id === "number" || variables.id === null) {
      variables.id = null;
      create({ variables });
      console.log("Создан объект: ", variables.name);
    } else {
      update({ variables });
      console.log("Обновлен объект: ", variables.name);
    }
  }
};
