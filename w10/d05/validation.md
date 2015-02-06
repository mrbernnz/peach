## do you validate?
validation allows us to ensure that a form is filled out correctly and return an error in the case that the user makes an error.

first, you must tell rails what is to be validated and how in each model.

a handful of typical layouts:

text boxes:

```ruby
validates :title, presence: true
```

```ruby
validates_length_of :content, :minimum => 3
```
or
```ruby
validates :content, length: {
  maximum: 5,
  minimum: 3,
  too_long: "WOAH HOLD YOUR HORSES",
  too_short: "THAT'S ALL YOU GOT?"
}
```
checkboxes:

```ruby
validates :terms_of_service, acceptance: true
```

LET'S SHOW IT TO THE USER:
in html:
```ruby
<ul>
<% @post.errors.full_messages.each do |msg| %>
<li><%= msg %></li>
<% end %>
</ul>
```

WHAT GOES IN YOUR CONTROLLER? (@create, in this instance)
```ruby
@post = Post.new(post_params)
if @post.save
  redirect_to post_path(@post)
else
  render :new
end
```
