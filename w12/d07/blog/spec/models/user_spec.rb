=begin
x It should be invalid without a first name
xIt should be invalid without a last name
xIt should have a full_name method that returns the user's first and last name (as a String).
It should be invalid without an email address.
It should be invalid if a user tries to sign up with an email address that already exists in the database
=end

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

  


  describe "#email_address" do
    it "should be invalid without an email address" do
      user = User.new(first_name: "Sam", last_name: "Gottfried")
      expect(user).to be_invalid
      expect(user.errors[:email_address]).to eq ["can't be blank"]
    end
  end
end
