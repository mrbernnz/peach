# Bootstrapped
Add bootstrap to last week's newspaper app found [here](https://github.com/ga-students/peach/tree/master/w10/d04/newspaper).
Do not just link to bootstrap in the head.

Use bootstrap to style the index page. Headlines should be centered and pictures should be circles. On show pages, use Collapse to hide the content of the article until a button is pushed. To do this exercise you will need to figure out how to assign classes to elements in rails. [getbootstrap.com](www.getbootstrap.com) can help you learn about Collapse and turning images into circles. 

Solution:

index:
```ruby
<%= @article.headline %>
<br>
<%= @article.author.name %>
<br>
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Button with data-target
</button>
<div class="collapse" id="collapseExample">
  <div class="well">
    ...

<%= @article.content %>
  </div>
</div>
<br>
<%= image_tag @article.photo_url, height:300 %>
<br>
<%= link_to "Destroy!!!", article_path(@article), method: :delete %>
<br>
<%= link_to "Go home!", articles_path %>
<%= link_to "Edit", edit_article_path(@article)%>
```

show page:
```ruby
<%= @article.headline %>
<br>
<%= @article.author.name %>
<br>
<button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
  Button with data-target
</button>
<div class="collapse" id="collapseExample">
  <div class="well">
    ...

<%= @article.content %>
  </div>
</div>
<br>
<%= image_tag @article.photo_url, height:300 %>
<br>
<%= link_to "Destroy!!!", article_path(@article), method: :delete %>
<br>
<%= link_to "Go home!", articles_path %>
<%= link_to "Edit", edit_article_path(@article)%>
```

# API'd

Change the newspaper app so when a user goes to ```/articles``` they get a JSON object  of all newspaper articles, including each article's headline, content, and just the author's name.

Hint: use map.

Solution:
```ruby  
def index
  articles = Article.all
  json_obj = articles.map do |article|
    { name: article.headline,
      author: article.author.name,
      content: article.content }
    end
    render json: json_obj
  end
```
