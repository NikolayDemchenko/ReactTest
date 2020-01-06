import React from "react";

export default ItemId => {
  return <div>Template {ItemId}</div>;
};
// export default (id) => {
//     const { loading, error, data, client } = useQuery(query, {
//       variables: { id }
//     });
//     if (loading) return "Loading...";
//     if (error) return `Error! ${error.message}`;
//     console.log("data:",data);
//     console.log("Загрузка папок");
//     return (
//       <div>
//         <NavigationPanel folder={data.folder} />
//         <Folders folder={data.folder} client={client} />
//       </div>
//     );
//   };