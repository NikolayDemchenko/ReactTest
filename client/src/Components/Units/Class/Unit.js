// const data = {
//   inputRow,
//   inputText,
//   inputNumber,
//   inputImage,
//   inputVideo,
//   inputAudio,
//   row,
//   text,
//   number,
//   image,
//   video,
//   audio
// };

class InstanceContainer {
  template;
  instances;
}
// class Data {
//   value;
//   visible;
// }

// class Name {
//   value;
//   visible;
// }
class Module {
  constructor(name) {
    this.visible = true;
    this.backgroundColor = "#778899";
    this.color = "#696969";
    this.name = name;
    this.nameVisible = true;
  }
}
class Entity extends Module {
  id;
  constructor(name, image, data) {
    super(name);
    this.image = image;
    this.imageVisible = true;
    this.data = data;
  }
}
class Value extends Module {
  constructor(name) {
    super(name)
    this.valueVisible = true; 
  }
}
class Container extends Value {
  constructor(name) {
    super(name)
    this.items = [];
  }
}
class ItemsContainer extends Container {
  constructor(name,type) {
    super(name)
    this.type = type;
  }
}
class InstanceContainer extends Container {
  constructor(name) {
    super(name)
    this.instances = [];
  }
}
class DataValue extends Value {
  value;  
}
class UnitValue extends DataValue {
  unit;
}
const num = new Container();
