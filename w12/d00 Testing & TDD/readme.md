# Testing & TDD
### Objectives:
1. Learn more about TDD  
2. Learn to unit test with Rspec.  
3. Learn to unit test ActiveRecord in Rails.  

## What is testing?

Testing is the process of making sure your code does what it's supposed to do.

Manual testing is just that - checking all the code works as expected after you change something. But this is limited by the time you need to test *everything* whenever you change *anything*. The bigger the code base gets the harder it is to check every line works every time a change is made.

Automatic testing is achieved by writing code that checks your code. This may involve writing some code which plays through scenarios that address various possible input values into your code, and what the expected outcome is.

When you write very small tests that check very small parts of classes, we'd call that "unit" testing.

As your code base grows, so does you test coverage. You should get to a situation where you can run the tests at any time, and every single line of your code gets passed through to ensure it's still returning what you expected it to when it was first written.

Problems with testing after developing:

  - Do you get to make the time?
  - Will your PM let you... ?
    - ...or make you get onto the next bit of functionality...


## What is TDD? 

In test-driven development, also called red/green development, you write the tests first, before writing any code, and then write code which makes the test pass.

The test will initially fail - that's the point of the 'red' - and the expectations of the test will drive how you will write your actual code, called your implementation, until the test passes (goes 'green').

Frequently, TDD uses pair programming - two developers working together at one machine. Often, one person writes a test; then the other writes the implementation (and they alternate through the day). In an interview, you might be given some test code and be asked to write the implementation code, or you might be asked to write the tests for some outline functionality to demostrate your familiarity with this process.

The process is also referred to as red/green/refactor, because once the test passes (it's "green"), you can review the code you've written, and any other parts of the code it effects to see if they can be cleaned up at all. No new functionality is added at this stage - the outcome is for the tests to pass exactly as they just have, but with some measure of 'better' code.


## Trying TDD

We're going to build a bank account application using TDD. The functionality of our app will include:

- creating a bank
- adding accounts to the bank
- depositing into an account
- withdrawing money from an account


Create a `bank_app` directory. Create a spec directory in it. Then install rspec.

```
  mkdir bank_app
  cd bank_app
  gem install rspec
```    

Make a directory inside `bank_app` called `spec`.  This is where our spec files will go.

Let's write a test for our bank. To test a file, create a test within spec called bank_spec.rb.

```
  touch spec/bank_spec.rb
```

Now try to run the test. Use rspec spec.

```
  rspec

  No examples found.

  Finished in 0.00005 seconds
  0 examples, 0 failures
```


## General structure of a project with rspec testing

What are we testing? We want to create a bank. What method would this use? `.new`.

A `describe` at the top of the test is for the class, then another `describe` is for the method being tested, then the `it` line is the test.

```rb
  describe Bank do
    describe ".new" do
      it "should create a Bank object" do
      end
    end
  end
```

Run the test. We get an error. This is good!

```
  rspec spec
  .../bank_app/spec/bank_spec.rb:4:in `<top (required)>': uninitialized constant Bank (NameError)...
```

This is because we don't have a class for `Bank`.  We can fix this!  Create a directory inside `bank_app` called `lib`.
Inside that directory, create a file called `bank.rb`.

Go into the bank.rb file and write some implementation code until the error goes away. The solution is to create a class called Bank.

```rb
  class Bank
  end
```

You'll also need to go into the spec file and require the file for the bank.
```rb
  require_relative '../lib/bank'
```

Now if we run our test again with `rspec`, it'll give tell us everything has passed

```
rspec
.

Finished in 0.00053 seconds (files took 0.21021 seconds to load)
1 example, 0 failures
```

This is good, but our test isn't really testing anything (there are no assertions).

What parameters will we want to include when creating a bank object? How about a name?
```rb
require_relative '../lib/bank'

describe Bank do
  describe ".new" do
    it "should create a Bank object" do
      bank = Bank.new('TD Bank')
      expect(bank).to_not eq nil
    end
  end
end

```

Run the test again, and it fails with:

```
F

Failures:

  1) Bank#new should create a Bank object
     Failure/Error: bank = Bank.new('TD Bank')
     ArgumentError:
       wrong number of arguments (1 for 0)
     # ./spec/bank_spec.rb:6:in `initialize'
     # ./spec/bank_spec.rb:6:in `new'
     # ./spec/bank_spec.rb:6:in `block (3 levels) in <top (required)>'

```

This tells you exactly which test was being run when it broke, and which line of the test file. The color-coding helps identify failed tests as well. 

Fix the problem. Only write the minimum amount of code needed to meet the requirements.

```rb
  def initialize(name)
  end
```

Run the test again, and it should pass.

Let's create another test. This tests the name method and expects it to return the name 'TD Bank'.

```rb
  describe "#name" do
    it "should return the bank's name" do
      bank = Bank.new('TD Bank')
      expect(bank.name).to eq 'TD Bank'
    end
  end
```

Remember, there are class methods, like `Person.new`, and instance methods, like `#name`. When you write tests, the naming convention is to use `.class_method` and `#instance_method` in the description.

When you run the tests, the name test should fail.

Let's fix the "undefined method 'name'" error so the bank name test passes.
To make the test pass, we candefine our own `name` method, but we can also use `attr_reader:name`, which creates a getter method for us.

```rb
  class Bank
    attr_accessor :name

    def initialize(name)
      @name = name
    end
  end
```

This passes the test. 

While doing this, notice that there is repeated code which creates a bank object in all of our tests. Let's DRY this code.

```rb
...
describe Bank do
  let(:bank) { Bank.new('TD Bank') }
...
```

We can use this `bank` in every test.  We can now remove `bank = Bank.new('TD Bank')` in all of our tests.
Run the test to see if this refactoring of the test works. That's one way we refactor... in our tests or our implementations... after every cycle of writing tests.


Now let's add a test for creating a bank account with a name and an initial deposit.

```rb
  describe "#create_account" do
    it "should create an account" do
      bank.create_account("Bob", 200)
      expect(bank.accounts["Bob"]).to eql 200
    end
  end
```

This test should fail because there is no `create_account` method for Accounts.

Let's write the code to make this test pass. Create a `create_account` method that takes a name and an initial deposit. Look at the error message to see what needs to be done.

```
  1) Bank#create_account create an account
     Failure/Error: bank.create_account('Bob', 200)
     NoMethodError:
       undefined method `create_account' for #<Bank:0x007fdd4b814270 @name="TD Bank">
```

Create a `create_account` method.

```rb
    def create_account(name, deposit)
    end
```

Now the error is about a missing `accounts` method. What is accounts? We know it is a hash because the the brackets in the test. We can fix this, but we need to add an accounts hash, and presumably when we initialize Bank, the hash should be initialized and empty - so this needs another test.

```rb
  describe ".new" do
    it "should create a Bank object" do
      expect(bank).to_not eq nil
    end
    it "should have no accounts" do
      expect(bank.accounts.count).to eq 0
    end
  end
```

Which causes there to be now two failing tests - but they both complain about the missing `accounts` method.

```rb
  attr_accessor :name
  attr_reader :accounts

  def initialize(name)
    @name = name
    @accounts = {}
  end
```

Now when we run our tests, only the last test fails (because `create_account` has not been implemented).
We can fix the new failure by implementing it.

```rb
  def create_account(name, deposit)
    @accounts[name] = deposit
  end
```

Now all 4 tests will pass!

Now we'll write a test to handle a deposit into an account.

```rb
  describe "#deposit" do
    it "should deposit money from the client into account" do
      bank.create_account("Bob", 200)
      bank.deposit("Bob", 300)
      expect(bank.accounts["Bob"]).to eq 500
    end
  end
```

Now write some code to define the deposit method.

```rb
  def deposit(name, amount)
    @accounts[name] += amount
  end
```

Yay! It passes!

Let's add a feature to check the balance on an account. Start with the test.

```rb
describe "#balance" do
  it "should return the balance for the client" do
    bank.create_account("Bob", 200)
    expect(bank.balance("Bob")).to eq 200
  end
end
```

After seeing the code fail, we can pass it like this:

```rb
  def balance(name)
    @accounts[name]
  end
```

Now add a test for a withdrawal.

```rb
 describe "#withdraw" do
    it "should subtract money from the account" do
      bank.create_account("Bob", 200)
      bank.withdraw("Bob", 50)
      expect(bank.balance("Bob")).to eq 150
    end
  end
```

And write the code to pass the test.

```rb
  def withdraw(name, amount)
    @accounts[name] -= amount
  end
```

Congratulations! You just created an app with lots of features using TDD!


## Is the test always right? 

Humans write the tests too, so this is not infallible.

What situations can we anticipate that would make our code misbehave?

- what happens if you try to withdraw more than is in an account?
- what happens if you try to deposit money into a non-existent account?
- or if you try to withdraw from a non-existent account?


Add one more test to ignore withdrawals that are greater than the account balance.

```rb
describe "#withdraw" do
  it "should subtract money from the account" do
    bank.create_account("Bob", 200)
    bank.withdraw("Bob", 50)
    expect(bank.balance("Bob")).to eq 150
  end

  it "should ignore requests for withdrawls greater than account balance" do
    bank.create_account("Bob", 200)
    bank.withdraw("Bob", 5000)
    expect(bank.balance("Bob")).to eq 200
  end
end
```

And write the code to pass the test. 

```rb
 def withdraw(name, amount)
    if amount <= @accounts[name]
      @accounts[name] -= amount
    end
  end
```

# Exercise: Wizard (revisited)

Create a `Wizard` constructor function and test it with rspec.

Here are the user stories for the Wizard:
* A wizard can cast a spell.
* A wizard can cast 5 spells before they run out of magic.
* A wizard's magic can be regenerated to 5 spells
* A wizard can be hit by a spell
* A wizard can be hit a maximum of 2 times before they die
* A dead wizard cannot cast spells
* A dead wizard can be brought back from the dead

# Rails Testing

Lets create a new Rails app
`rails new blog`

Add the following `gem' to our Gemfile (inside of `group :development, :test`)

```rb
gem 'rspec-rails'
```

Run `bundle install` to install the `rspec-rails` gem.

Now we can run `rails generate rspec:install` to set up rspec in our project.

This creates a `.rspec` file and a `spec_helper` file (which specifies a configuration for our specs). It also creates a `spec` directory, where our specs will go.  It will also create some other files, but we don't need to concern ourselves with that right now.

In that `.rspec` file, add `--format=documentation` after `--color`.  This will give us nice "documentation" formatting when we run our tests.

Inside the `spec` directory, make a directory called `models`.  This is where our model specs will go.

Inside here, make a file called `story_spec.rb`.

Let's add some pending specs to our story spec file.
Note: Pending specs will not run and are basically placeholders for tests that we will add soon.

```rb
require 'rails_helper'

describe Story do
  it "should be invalid without an author"
  it "should be invalid with blank content"
  it "should not have content longer than 500 characters"
  it "should not allow duplicate titles to be persisted" 
end
```

If you don't put a block after the "it", your test won't run.  This is still TDD though, since we are thinking about the behavior of our model before we think about how to implement it.

If we run `rspec`, we'll see that `Story` hasn't been initialized.  We need to create the model first.

`rails generate model Story title:text author:text content:text`
Note: Rails will try to create a `story_spec` file. We've already created that, so we can just enter `n` for no at the prompt.

Now we need to run `rake db:migrate` to generate the table.

Finally we can run `rspec` and we see 4 pending (yellow) tests.

Let's implement our first test:

```rb
  it "should be invalid without an author" do
    story = Story.new
    expect(story).to be_invalid
  end
```

If we run this, our test will fail because we haven't added any validations (so our story is valid).

Let's fix that.

In our model:
```rb
class Story < ActiveRecord::Base
  validates :author, presence: true
end
```

If we run rspec again, this passes!

We can also be more specific in our test:

```rb
  it "should be invalid without an author" do
    story = Story.new
    expect(story).to be_invalid
    expect(story.errors[:author]).to eq ["can't be blank"]
  end
```

Here we actually specify the error we want to receive.

Now let's move onto the next spec.

```rb
  it "should be invalid with blank content" do
    story = Story.new
    expect(story).to be_invalid
  end
```

Yay! It passes!  
But wait a second, we didn't do anything!  It's only passing because there is no author.  Let's add an author and see if it still passes.

```rb
it "should be invalid with blank content" do
  story = Story.new(author: "Sam")
  expect(story).to be_invalid
end
```

Now it fails again.  Let's go back to the implementation and fix this.
```rb
  validates :content, presence: true
```

That's all you have to do to make this test pass, but it wouldn't hurt to be a little more explicit:

```rb
  it "should be invalid with blank content" do
    story = Story.new(author: "Sam")
    expect(story).to be_invalid
    expect(story.errors[:content]).to eq ["can't be blank"]
  end
```

On to the next test!

```rb
  it "should not have content longer than 500 characters" do
    story = Story.new(author: "Sam", content: "a" * 501)
    expect(story).to be_invalid
    expect(story.errors[:content]).to eq ["is too long (maximum is 500 characters)"]
  end
```

```rb
  validates :content, length: {maximum: 500}
```

And the last test:

```rb
  it "should not allow duplicate titles to be persisted" do
    story = Story.create(author: "Sam", title: "my_title", content: "something")
    expect(Story.count).to eq 1
    story2 = Story.new(author: "Sam", title: "my_title", content: "another thing")
    expect(story2).to be_invalid
    expect(story2.errors[:title]).to eq ["has already been taken"]
  end
```

First we create a `Story`.  We check the database using `Story.count` to verify that it was persisted.  Note that this uses your "test database" that Rails creates for you.  You can do whatever you want in here because it won't affect your development or production environments.

Then we initialize a new `Story`.  We give it the same title and we expect it to be invalid (which is why we didn't save it).

This test fails, so let's make it pass.

```rb
  validates :title, uniqueness: true
```

We've now implemented all of our User stories from earlier!

# Exercise: Add a User model

Create a user model that has a first name, a last name, and an email address.
It must also satisfy the following requirements:
- It should be invalid without a first name  
- It should be invalid without a last name
- It should have a `full_name` method that returns the user's first and last name (as a String).
- It should be invalid without an email address.
- It should be invalid if a user tries to sign up with an email address that already exists in the database

Solution:  
`user_spec.rb`
```rb
describe User do
  describe "#first_name" do
    it "should be invalid without a first name" do
      user = User.new
      expect(user).to be_invalid
      expect(user.errors[:first_name]).to eq ["can't be blank"]
    end
  end

  describe "#last_name" do
    it "should be invalid without a last name" do
      user = User.new(first_name: "Sam")
      expect(user).to be_invalid
      expect(user.errors[:last_name]).to eq ["can't be blank"]
    end
  end

  describe "#full_name" do
    it "should return the first and last name" do
      user = User.new(first_name: "Sam", last_name: "Gottfried")
      expect(user.full_name).to eq "Sam Gottfried"
    end
  end

  describe "#email_addres" do
    it "should be invalid without an email address" do
      user = User.new(first_name: "Sam", last_name: "Gottfried")
      expect(user).to be_invalid
      expect(user.errors[:email_address]).to eq ["can't be blank"]
    end

    it "should be invalid if a user tries to sign up with an email address that already exists in the database" do
      user = User.create(first_name: "Sam", last_name: "Gottfried", email_address: "sgottfried@ga.co")
      expect(User.count).to eq 1
      user2 = User.new(first_name: "First", last_name: "Last", email_address: "sgottfried@ga.co")
      expect(user2).to be_invalid
      expect(user2.errors[:email_address]).to eq ["has already been taken"]
    end
  end

end
```

`user.rb`
```rb
class User < ActiveRecord::Base
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email_address, presence: true
  validates :email_address, uniqueness: true

  def full_name
    "#{first_name} #{last_name}"
  end
end
```
