interface IEntity {
    id: string;
    parentId: string | null;
    childrens?: {}[];
  }
  export const HierarchycalEntitiesToJs = (entities: IEntity[]) =>  EntitiesToJs(entities, null);
  
  export const EntitiesToJs = (
    entities: IEntity[],
    _parentId: string | null
  ) => {
    return entities.filter((entity) => {
      if (entity.parentId === _parentId) {
        entity.childrens = EntitiesToJs(
          entities.filter(({ parentId }) => parentId !== _parentId),
          entity.id
        );
      }
      return entity;
    });
  };