# Testing

* What is a test? Given X, we expect Y.
* Why do we test?
  * Regression errors - make sure things work as intended
  * Documents code - makes it easier for new developers to understand how code should work
  * Help us to think incrementally and structurally - no fuzzy thinking - forces us to break things down.
  * Think about edge cases.
* How do we test?
  * Red, green, refactor
  * Acceptance and Unit Tests (outside-in)
    - high level feature (user interface)
    - unit tests

* What we are going over
    - Unit testing concepts
    - Writing Unit tests in Mocha JS

------

# Mocha JS

First we need to install mocha:

`npm install -g mocha`

Make a file called `array_test.js`

Add the following to that file:

```js
var assert = require("assert");
describe("Array", function() {
  describe("#length", function() {
    it("should return 0 when nothing has been added", function() {
      assert.equal(0, [].length);
    });
  });
});
```

First we need to `require("assert")`.  This gives us access to the assert library (provided by mocha), and that allows us to make assertions.  Then we can "describe" what we want to test.  This is a good practice that tells others what you're testing and helps document your code.  We can also nest "describes".  This is pretty common, and in this case we are describing the method we are testing (length).  
Finally we get to the actual test, which is designated with "it".  

This can be read as "it should return 0 when nothing has been added", or more completely as "Array #length should return 0 when nothing has been added.".

You can run these tests from the directory above `test` by running `mocha array_test.js`.

You'll see that you are running a test for `Array` and `#length` is the feature you are testing.  You'll see your individual test and you'll see a green checkmark when it passes.

Let's try making it fail.

Change the assertion to this:

```js
  assert.equal(0, ["something"].length);
```

Run `mocha` again and you'll see that the test is now red and you'll see that 1 test is failing.  You'll also see why it failed.

We can add some more tests.

```js
describe("#length", function() {
    it("should return 0 when nothing has been added", function() {
      assert.equal(0, [].length);
      assert.notEqual(0, ["something"].length);
    });

    it("should return 1 when something has been added", function() {
      assert.equal(1, ["something"].length);
    });
  });
```

Note that when we run this, we have 3 assertions but only 2 tests (one for each "it").

Let's add some tests for the `push` method:

```js
var assert = require("assert");
describe("Array", function() {
  describe("#length", function() {
    it("should return 0 when nothing has been added", function() {
      assert.equal(0, [].length);
      assert.notEqual(0, ["something"].length);
    });

    it("should return 1 when something has been added", function() {
      assert.equal(1, ["something"].length);
    });
  });

  describe("#push", function() {
    it("should add an element to the end of the array.", function() {
      var arr = [];
      var element = "element";

      arr.push(element);

      assert.equal(1, arr.length);
      assert.equal(element, arr[0]);
    });
  });
});
```

Here we have some extra set up that's required for this test.
This is pretty common for unit tests.  This basically reads as GIVEN I have an empty array and an element, WHEN I `push` an element into the Array THEN I should have one element in the array AND that element should be the only element in the array.

Sometimes this setup can be moved into a "beforeEach".  

```js
  var arr;
  var element;

  describe("#push", function() {
    beforeEach(function() {
      arr = [];
      element = "element";
      arr.push(element);
    });

    it("should add an element to the end of the array.", function() {
      assert.equal(1, arr.length);
      assert.equal(element, arr[0]);
    });

    it("should allow us to add another element to the array.", function() {
      arr.push(element);
      assert.equal(2, arr.length);
    });
  });
```

The code in the `beforeEach` is run before each test.  Now we have less code in our individual tests, and they are better organized.

# Exercise: Write Some Tests around Strings
Write some tests to check for the following "user stories" for the `indexOf` method on `String`.  Try to use your `describe`s properly.

Given the following String: "In a hole in the ground, there lived a hobbit.",
`indexOf` should:
1. Return `0` for "In a hole"  
2. Return `3` for "hole"  
3. Return `17` for "ground"  
4. Return `39` for "hobbit"  
5. Return `-1` for "Bilbo"  

# Shopping Cart

So now that we know how to test stuff that other people made, let's try to make a shopping cart object and add tests to it.


Here is the shopping cart:

```js
var ShoppingCart = function() {
  this.items = [];
  this.addItem = function(item) {
    this.items.push(item);
  };

  this.removeItem = function(item) {
    var index = this.items.indexOf(item);
    if(index > -1) {
      this.items.splice(index, 1);
      return true;
    } else {
      return false;
    }
  };

  this.checkout = function() {
    var message = "You have purchased the following items:\n";
    message += this.items.join("\n");
    this.items = [];
    return message;
  }
};
```

Now let's test the following features of our shopping cart.

# Exercise: Write tests for shopping cart

`items` 
  - should be empty when the shopping cart is initiated.

`addItem`
  - should add a single item to the list of items

`removeItem`
  - should return true if an item is removed
  - should remove an item if it exists
  - should return false if an item does not exist

`checkout`
  - should return a message with all the items in the shopping cart
  - should empty the items in the shopping cart

Solution
```js
var assert = require("assert");
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
```




# Exercise: Wizard

Create a `Wizard` constructor function and test it with mocha.

Here are the user stories for the Wizard:
* A wizard can cast a spell.
* A wizard can cast 5 spells before they run out of magic.
* A wizard's magic can be regenerated to 5 spells
* A wizard can be hit by a spell
* A wizard can be hit a maximum of 2 times before they die
* A dead wizard cannot cast spells
* A dead wizard can be brought back from the dead

# Exercise: Email Address generator
Given the following email addresses:

| Name | Email |
|:---- |:----- |
| Eric Shmidt | eshmidt@google.com |
| Sergey Brin | sbrin@google.com |
| Sean West| sean.west@generalassemb.ly|
| Crawford Forbes| crawford.forbes@generalassemb.ly|
| Meryl Streep | meryl@oscars.com |
| Daniel Day-Lewis | daniel@oscars.com |

Develop code which can predict the email addresses for the following:

| Name | Company |
|:---- |:----- |
| Larry Page | google.com |
| Olivia Grosvenor | ga.co |
| Jack Nicholson | oscars.com |


Start from high level - what should top level interaction look like? Think a little about implementation. Start, try to write a test. Keep trying to write tests until you actually can write something simple.
