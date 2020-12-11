import shortid from "shortid";
import jss from "jss";
import preset from "jss-preset-default";
import { createStyle } from "../../AppFunction";

const getTree = (classes, tags = [], _parentId) => {
  return tags.filter((tag) => {
    tag.className = classes[tag.styleId];
    // console.log("getTagStructure");
    if (tag.parentId === _parentId) {
      tag.childrens = getTree(
        classes,
        tags.filter(({ parentId }) => parentId !== _parentId),
        tag.id
      );
      return tag;
    }
  });
};
export const TagCRUD = (page, setPage, setSettings) => {
  jss.setup(preset());
  const myStyles = {};
  page.styles &&
    page.styles.forEach(({ id, data }) => {
      myStyles[id] = data;
    });
  const { classes } = jss.createStyleSheet({ ...myStyles }).attach();

  return {
    getTagTree: (tags, pId) => getTree(classes, tags, pId),
    createTag: (type, parent) => {

      const newStyle = createStyle({}, "name");

      setPage((page) => ({
        ...page,
        tags: [
          ...page.tags,
          {
            id: shortid.generate(),
            parentId: parent.id,
            type,
            index: (parent.childrens && parent.childrens.length) || 0,
            styleId: newStyle.id,
          },
        ],
        styles: [...page.styles, newStyle],
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
            return tag;
          } else {
            return _tag;
          }
        }),
      }));
    },
  };
};
