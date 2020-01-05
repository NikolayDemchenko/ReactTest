import { merge } from "lodash";
import parentFolder from "Components/DataWindow/Content/Folder/DataContainer/Resolvers/NewParentFolder";
import folder from "Components/DataWindow/Content/Folder/DataContainer/Resolvers/NewFolder";

export default merge(folder, parentFolder);