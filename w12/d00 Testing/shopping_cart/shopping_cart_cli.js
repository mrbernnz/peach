var ShoppingCart = require('./lib/shopping_cart');

var sc = new ShoppingCart();
sc.addItem('shirt');
sc.addItem('pants');
sc.addItem('socks');

console.log(sc.checkout());
