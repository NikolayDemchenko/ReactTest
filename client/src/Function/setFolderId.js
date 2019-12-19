export default (client, FolderId)=> {
  client.writeData({ data: { FolderId } });
  console.log("--- В FolderId передан: ", FolderId);
}