const Menu = require("../src/Menu");
const Restaurant = require("../src/Restaurant");
const Item = require("../src/Item");

//Restaurant-test
describe("basic Restaurant test", () => {
  test("Restaurant has foodie, imgUrl and city", () => {
    //Arrange
    const foodie = new Restaurant("Foodie", "pasta.jpg", "london");
    const main = new Menu("Main", "🍝");
    const pasta = new Item("Spaghetti", 8);
    // Act
    foodie.listMenu(main);
    main.listItem(pasta);
    //Assert
    expect(foodie.menus).toEqual([main]);
    expect(foodie.name).toEqual("Foodie");
    expect(foodie.imgUrl).toEqual("pasta.jpg");
    expect(foodie.city).toEqual("london");
    // this connection between the list and menu
    expect(main.items).toEqual([pasta]);
    expect(main.title).toEqual("Main");
    expect(main.icon).toEqual("🍝");
    // this items
    expect(pasta.name).toEqual("Spaghetti");
    expect(pasta.price).toEqual(8);
  });
});
