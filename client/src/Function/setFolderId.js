export default function setFolderId(client,arg){     client.writeData({
    data: {
      FolderId: arg
    }
  });
  console.log("--- В FolderId передан: ", arg);
 };
