var assert = require("assert");
var ShoppingCart = require("../lib/shopping_cart");
var sc;

describe("ShoppingCart", function() {
  beforeEach(function() {
    sc = new ShoppingCart();
  });

  describe("items", function() {
    it("should be empty when the shopping cart is initiated", function() {
      assert.equal(0, sc.items.length);
    });
  });

  describe("addItem", function() {
    it("should add a single item to the list of items", function() {
      sc.addItem("t-shirt");
      assert.equal(1, sc.items.length);
      assert.equal("t-shirt", sc.items[0]);
    });
  });

  describe("removeItem", function() {
    beforeEach(function() {
      sc.addItem("t-shirt");
    });

    it("should return true if an item is removed", function() {
      assert.equal(true, sc.removeItem("t-shirt"));
    });

    it("should remove an item if it exists", function() {
      sc.removeItem("t-shirt");
      assert.equal(0, sc.items.length);
    });

    it("should return false if an item does not exist", function() {
      assert.equal(false, sc.removeItem("sweatshirt"));
    });
  });

  describe("checkout", function() {
    beforeEach(function() {
      sc.addItem("t-shirt");
      sc.addItem("sweatshirt");
      sc.addItem("pants");
    });

    it("should return a message with all the items in the shopping cart", function() {
      assert.equal("You have purchased the following items:\n" +
        "t-shirt\n" +
        "sweatshirt\n" +
        "pants", sc.checkout());
    });

    it("should empty the items in the shopping cart", function() {
      sc.checkout();
      assert.equal(0, sc.items.length);
    });
  });
});
