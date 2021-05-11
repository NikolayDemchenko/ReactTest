import jss, { JssStyle } from 'jss';
import preset from 'jss-preset-default';

export const createStyleSheet = (styles: { [key: string]: JssStyle }) => {
  jss.setup(preset());
  const { classes } = jss.createStyleSheet(styles).attach();
  return classes;
};

export const createJssStyles = (styles: { name: string; data: JssStyle }[]) => {
  const myStyles: { [key: string]: JssStyle } = {};
  styles.forEach(({ name, data }) => {
    myStyles[name] = data;
  });
  return jss.createStyleSheet(myStyles).attach().classes;
};
