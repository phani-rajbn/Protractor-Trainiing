var cart = require('./FirstModule')();
//If U R refering external module of Node in uR code, then U should use the require. ./ is to tell that we are loading a custom module from our directory. For Core modules we dont use the ./ 
cart.AddToCart({"id":123, "itemName":"iPhone 7s", "cost":650});
cart.AddToCart({"id":124, "itemName":"Mi MAX2", "cost":450});
cart.AddToCart({"id":125, "itemName":"Moto G3", "cost":475});
cart.AddToCart({"id":126, "itemName":"Nokia X", "cost":330});
cart.AddToCart({"id": 127,"itemName":"Audi X100", cost:500, RegNo:"KAO5 M7896"});

var items = cart.GetAllItems();
for(i = 0; i <items.length; i++)
    console.log(items[i].RegNo);
cart.DeleteItem(123);
console.log("After removing....")
var items = cart.GetAllItems();
for(i = 0; i <items.length; i++)
    console.log(items[i]);
console.log("The Product was developed by " + cart.Author);
console.log("The Product was developed on " + cart.DevelopedOn);