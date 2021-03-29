const Item = require("../src/Item");
//Item-test
describe("basic item test", () => {
  test("Item has name and price", () => {
    //Arrange
    const pasta = new Item("Spaghetti", 8);
    // Act
    //Assert
    expect(pasta.name).toEqual("Spaghetti");
    expect(pasta.price).toEqual(8);
  });
});
