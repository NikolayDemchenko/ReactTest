import { VoidComponent } from '../VoidComponent';

export const InputWithPlaceholder = (className: string) => {
  const input = new VoidComponent("input");
  input.propertyForRenderData = "placeholder";
  input.props.className = className;
  return input
};
