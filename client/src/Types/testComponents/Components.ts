import { Container } from './Elements';
import {
  ImageFactory,
  StringFactory,
  VoidElementFactory,
} from './Factories';

const сontainer = new Container("div", {className:"title"});
const сontainer1 = new Container("div", {className:"title"});
const сontainer2 = new Container("div",{className: "title"})

const titleFactory = new StringFactory(new VoidElementFactory("h1", "title",сontainer1));
const imageFactory = new ImageFactory(new VoidElementFactory("img", "title",сontainer1));
const textFactory = new StringFactory(new VoidElementFactory("span", "title",сontainer1));

titleFactory.createText("Некий текст");
titleFactory.createText("Некий текст");
titleFactory.createText("Некий текст");
imageFactory.createImageByURL("https://pbs.twimg.com/media/DbLTMIJXcAE3RDE.jpg");


const copytext=textFactory.createText("Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст Некий текст ");
imageFactory.createImageByURL("https://pbs.twimg.com/media/DbLTMIJXcAE3RDE.jpg");
titleFactory.createText("Вот так");
titleFactory.createText("Некий текст");

copytext.renderTo(сontainer1)
titleFactory.createText("Некий текст");
copytext.renderTo(сontainer1)
copytext.renderTo(сontainer1)
copytext.renderTo(сontainer1)
copytext.renderTo(сontainer1)
titleFactory.createText("Некий текст");
titleFactory.createText("Некий текст");

сontainer1.renderTo(сontainer);
сontainer2.renderTo(сontainer);
copytext.renderTo(сontainer2)
copytext.renderTo(сontainer2)
export const ContainerComponent = сontainer.component;
