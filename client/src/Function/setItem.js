export default (client, ItemId, ItemType="Folder")=> {
  client.writeData({ data: { ItemId, ItemType } });
  console.log("--- В ItemId передан: ", ItemId);
}