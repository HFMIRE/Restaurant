const Menu = require("../src/Menu");
const Item = require("../src/Item");

//Menu-test
describe("basic Menu test", () => {
  test("Item has Title and Icon & items ", () => {
    //Arrange
    const main = new Menu("Main", "🍝");
    const pasta = new Item("Spaghetti", 8);
    // Act
    main.listItem(pasta);
    //Assert
    expect(main.items).toEqual([pasta]);
    expect(main.title).toEqual("Main");
    expect(main.icon).toEqual("🍝");
  });
});
