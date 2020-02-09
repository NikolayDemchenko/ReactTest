import { GET_TEMPLATE_BY_ID as query } from "../../TemplateQueries";

export default {
  Mutation: {
    newElement: (_root, { template, group }, { cache }) => {
      // console.log("id: ", group.id);
      const newElement = {
        id: Date.now(),
        name: "",
        visible: false,
        filter: false,
        parentId: group.id,
        __typename: "Element"
      };
      group.elements = group.elements !== undefined ? group.elements : [];
      group.elements.unshift(newElement);     
      template.groups = template.groups.map(_group => {
        if (_group.id === group.id) {
          _group = group;
        }
        return _group;
      });
      cache.writeQuery({
        query,
        variables: { id: template.id },
        data: { template }
      });
    },
    updateElementFields: (_root, { template, group, element }, { cache }) => {
      console.log("updateElementFields");

      group.elements = group.elements.map(_element => {
        if (_element.id === element.id) {
          _element = element;
        }
        return _element;
      });
      template.groups = template.groups.map(_group => {
        if (_group.id === group.id) {
          _group = group;
        }
        return _group;
      });
      cache.writeQuery({
        query,
        variables: { id: template.id },
        data: { template }
      });   
    },
    // deleteElement: (_root, { template, group, element }, { cache }) => {
    //   console.log("Удаление элемента");
    //   group.elements = group.elements.filter(_element =>
    //     _element !== element ? true : false
    //   );
    //   template.groups = template.groups.map(_group => {
    //     if (_group.id === group.id) {
    //       _group = group;
    //     }
    //     return _group;
    //   });
    //   cache.writeQuery({
    //     query,
    //     variables: { id: template.id },
    //     data: { template }
    //   });      
    // }
  }
};
