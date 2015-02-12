var Articles = Backbone.Collection.extend({
  model: Article,
  url: 'http://localhost:3000/articles'
});

var articles = new Articles();
articles.fetch();
