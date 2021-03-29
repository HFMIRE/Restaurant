class Restaurant {
  constructor(name, imgUrl, city) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.city = city;
    this.menus = [];
  }
  listMenu(menu) {
    this.menus.push(menu);
  }
}

module.exports = Restaurant;
