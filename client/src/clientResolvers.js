import { merge } from "lodash";
import parentFolder from "./Components/DataWindow/Content/Folder/DataContainer/Resolvers/NewParentFolder";
import folder from "./Components/DataWindow/Content/Folder/DataContainer/Resolvers/NewFolder";
import group from "./Components/DataWindow/Content/Template/Group/Resolvers";
import element from "./Components/DataWindow/Content/Template/Group/Element/Resolvers";
import template from "./Components/DataWindow/Content/Template/Resolvers";

export default merge(folder, parentFolder, group, element,template);
