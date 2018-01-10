//First module will be shopping cart app..


module.exports = (function(){
    var cart = [];//create an array of Cart objects....

    function addToCart(item){
        cart.push(item);
    }
    function remove(id){
        for(i = 0; i< cart.length;i++){
            if(cart[i].id == id){
              cart.splice(i, 1);
              return;
            }
        }
        throw "No Item found to remove";
    }
    function getAll(){
        return cart;
    }//In a module, functions are private...
    return{
        AddToCart : addToCart,
        GetAllItems : getAll,
        DeleteItem : remove
    }
});
module.exports.Author = "Phaniraj";
module.exports.DevelopedOn = new Date();