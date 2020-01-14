import { merge } from "lodash";
import parentFolder from "./Components/DataWindow/Content/Folder/DataContainer/Resolvers/NewParentFolder";
import folder from "./Components/DataWindow/Content/Folder/DataContainer/Resolvers/NewFolder";
import group from "./Components/DataWindow/Content/Template/Group/NewGroup";
import element from "./Components/DataWindow/Content/Template/Group/Element/NewElement";

export default merge(folder, parentFolder, group, element);
