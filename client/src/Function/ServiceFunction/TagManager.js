import shortid from "shortid";
const getTagTree = (tags, _parentId) => {
  const thisTags = JSON.parse(JSON.stringify(tags));
  return thisTags.filter((tag) => {
    // console.log("getTagStructure");
    if (tag.parentId === _parentId) {
      tag.childrens = getTagTree(
        thisTags.filter(({ parentId }) => parentId !== _parentId),
        tag.id
      );
      return tag;
    }
  });
};
export const TagManager = (setPage, setSettings) => ({
  getTagTree,
  createTag: (type, parent) => {
    setPage((page) => ({
      ...page,
      tags: [
        ...page.tags,
        {
          id: shortid.generate(),
          parentId: parent.id,
          type,
          index: parent.childrens.length,
          styleId: page.styles.find((style) => style.name === "newStyle").id,
        },
      ],
    }));
  },
  removeTag: (tagId) => {
    setSettings();
    setPage((page) => ({
      ...page,
      tags: page.tags.filter((tag) => tag.id !== tagId),
    }));
  },
  updateTag: (tagId, propName, propValue) => {
    setPage((page) => ({
      ...page,
      tags: page.tags.map((_tag) => {
        if (_tag.id === tagId) {
          const tag = { ..._tag, [propName]: propValue };
          setSettings((settings) => ({ ...settings, tag }));
          return tag
        } else {
          return _tag;
        }
      }),
    }));
  },
});
