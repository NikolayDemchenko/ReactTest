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
  constructor(name, image, data) {
    super(name);
    this.image = image;
    this.imageVisible = true;
    this.data = data;
    this.id;
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
  constructor(name) {
    super(name) 
    this.value;
  }
  
}
class UnitValue extends DataValue {
  constructor(name) {
    super(name) 
    this.unit;
  }
}
const num = new UnitValue();
console.log('num', num)