import jss, { JssStyle } from 'jss';
import preset from 'jss-preset-default';

export const createStyleSheet = (styles: { [key: string]: JssStyle }) => {
  jss.setup(preset());
  const { classes } = jss.createStyleSheet(styles).attach();
  return classes;
};
