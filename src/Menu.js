const Item = require("../src/Item");

class Menu {
  constructor(title, icon) {
    this.title = title;
    this.icon = icon;
    this.items = [];
  }
  listItem(item) {
    this.items.push(item);
  }
}

module.exports = Menu;
