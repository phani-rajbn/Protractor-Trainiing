exports.vehicle = (function(){
    function getFuelCost(type){
        if(type === 'petrol'){
            return 71;
        }else if(type === 'diesel'){
            return 61;
        }
    }
    return{
        getFuelCost : getFuelCost
    }
})();