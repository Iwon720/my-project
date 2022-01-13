let devices = [
  {
    id: 1,
    name: "Samsung A50",
    brand: "Samsung",
    description: "Astonishing!",
    price: 500,
  },
  {
    id: 2,
    name: "Redmi Note 7",
    brand: "Xiaomi",
    description: "Astonishing!",
    price: 200,
  },
  {
    id: 3,
    name: "Huawei P8 Lite",
    brand: "Huawei",
    description: "Astonishing!",
    price: 300,
  },
  {
    id: 4,
    name: "Google Pixel",
    brand: "Google",
    description: "Astonishing!",
    price: 750,
  },
  {
    id: 5,
    name: "Lg",
    brand: "LG",
    description: "Astonishing!",
    price: 500,
  },
];

module.exports = class Device {
  constructor(device) {
    this.id = device.id;
    this.name = device.name;
    this.brand = device.brand;
    this.description = device.description;
    this.price = device.price;
  }
  save() {
    devices.push(this);
  }
  static getAll() {
    return devices;
  }
};
