export default (cache, value) => {
    cache.writeData({
      data: {
        AddGroup: value
      }
    });
  };