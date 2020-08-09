import {saveAs} from "file-saver";
export const SaveToJSON= (data) => {
  saveAs(
    new Blob([JSON.stringify(data)], {
      type: "application/json;charset=utf-8",
    })
  );
};
