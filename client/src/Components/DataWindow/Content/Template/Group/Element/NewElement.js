import { GET_TEMPLATE_BY_ID as query } from "../../TemplateQueries";
import { setAddElement } from "../../Function/SetAdd";
export default {
  Mutation: {
    newElement: (_root, { template, group }, { cache }) => {
      console.log("template: ", template);
      console.log("id: ", group.id);
      const newElement = {
        id: Date.now(),
        name: "",
        __typename: "Element"
      };

      group.elements.unshift(newElement);
      template.groups = template.groups.map(_group => {
        if (_group.id == group.id) {
          _group = group;
        }
        return _group;
      });
      cache.writeQuery({
        query,
        variables: { id: template.id },
        data: { template }
      });

      setAddElement(cache, false);
      console.log("Конец мутации");
    }
  },
  updateElementName: (_root, { template, group, element }, { cache }) => {
    console.log("template: ", template);
    console.log("id: ", group.id);
    const newElement = {
      id: element.id,
      name: element.name,
      __typename: "Element"
    };

    group.elements = group.elements.map(_element => {
      if (_element.id == element.id) {
        _element = element;
      }
      return _element;
    });
    template.groups = template.groups.map(_group => {
      if (_group.id == group.id) {
        _group = group;
      }
      return _group;
    });
    cache.writeQuery({
      query,
      variables: { id: template.id },
      data: { template }
    });

    console.log("Конец мутации");
  }
};
