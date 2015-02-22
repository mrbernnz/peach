require 'rails_helper'

describe Story do
  it "should be invalid without an author" do
    story = Story.new
    expect(story).to be_invalid
    expect(story.errors[:author]).to eq ["can't be blank"]
  end

  it "should be invalid with blank content" do
    story = Story.new(author: "Sam")
    expect(story).to be_invalid
    expect(story.errors[:content]).to eq ["can't be blank"]
  end

  it "should not have content longer than 500 characters" do
    story = Story.new(author: "Sam", content: "a" * 501)
    expect(story).to be_invalid
    expect(story.errors[:content]).to eq ["is too long (maximum is 500 characters)"]
  end

  it "should not allow duplicate titles to be persisted" do
    story = Story.create(author: "Sam", title: "my_title", content: "something")
    expect(Story.count).to eq 1

    story2 = Story.new(author: "Sam2", title: "my_title", content: "another thing")
    expect(story2).to be_invalid
    expect(story2.errors[:title]).to eq ["has already been taken"]
  end
end
