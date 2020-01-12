import React from "react";

export default ({name,elements}) => {
  return (
    <div key={specsSheet.id} className={style.ColumnGroup}>
      {/* <div className={style.RowGroup}> */}
      Имя группы :
      <NameComponent
        name={name}
        btnStyle={buttonStyle.Crud}
        inputStyle={inputStyle.Input}
        containerStyle={container.FolderName}
        // save={name =>
        //   save({
        //     id,
        //     name,
        //     parentId
        //   })
        // }
        // remove={() => remove(id)}
      />
      {/* </div>  */}
      <Add />
      {elements.map(spec => {
        return (
          <div key={spec.id}>
            <NameComponent
              name={spec.name}
              btnStyle={buttonStyle.Crud}
              inputStyle={inputStyle.Input}
              containerStyle={container.BaseName}
              // save={name =>
              //   save({
              //     id,
              //     name,
              //     parentId
              //   })
              // }
              // remove={() => remove(id)}
            />
          </div>
        );
      })}
    </div>
  );
};
