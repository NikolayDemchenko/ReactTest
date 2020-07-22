import FileSaver from "file-saver";
export const SaveToJSON= (data) => {
  FileSaver.saveAs(
    new Blob([JSON.stringify(data)], {
      type: "application/json;charset=utf-8",
    })
  );
};
