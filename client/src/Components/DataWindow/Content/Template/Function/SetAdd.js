export const SetAddGroup= (cache, value) => {
    cache.writeData({
      data: {
        AddGroup: value
      }
    });
  };
export const SetAddElement= (cache, value) => {
    cache.writeData({
      data: {
        AddElement: value
      }
    });
  };