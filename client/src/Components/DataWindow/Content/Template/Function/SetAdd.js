export const setAddGroup= (cache, value) => {
    cache.writeData({
      data: {
        AddGroup: value
      }
    });
  };
export const setAddElement= (cache, value) => {
    cache.writeData({
      data: {
        AddElement: value
      }
    });
  };