const Menu = require("../src/Menu");
const Restaurant = require("../src/Restaurant");
const Item = require("../src/Item");

//Restaurant-test
describe("basic Restaurant test", () => {
  test("Restaurant has KFC, imgUrl and city and check the link between menu and item", () => {
    //Arrange
    const kfc = new Restaurant("KFC", "pasta.jpg", "london");
    const main = new Menu("Main", "🍝");
    const pasta = new Item("Spaghetti", 8);
    // Act
    kfc.listMenu(main);
    main.listItem(pasta);
    //Assert
    expect(kfc.menus).toEqual([main]);
    expect(kfc.name).toEqual("KFC");
    expect(kfc.imgUrl).toEqual("pasta.jpg");
    expect(kfc.city).toEqual("london");
    // this connection between the list and menu
    expect(main.items).toEqual([pasta]);
    expect(main.title).toEqual("Main");
    expect(main.icon).toEqual("🍝");
    // this items
    expect(pasta.name).toEqual("Spaghetti");
    expect(pasta.price).toEqual(8);
  });
});
